import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Elements/Card";
import axios from "axios";
import { NotifContext } from "../../../context/notifContext";
import { AuthContext } from "../../../context/authContext";

const CardBill = () => {
  const { msg, setMsg, setOpen, setIsLoading } = useContext(NotifContext);
  const { setIsLoggedIn, setName } = useContext(AuthContext);
  const navigate = useNavigate();
  const [bill, setBill] = useState({ bills: [] });
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      const response = await axios.get(
        "https://jwt-auth-eight-neon.vercel.app/bills",
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      setBill({ bills: response.data.data });
    } catch (error) {
      if (error.response) {
        if (error.response.status == 401) {
          setOpen(true);
          setMsg({
            severity: "error",
            desc: "Session Has Expired. Please Login.",
          });

          setIsLoggedIn(false);
          setName("");

          localStorage.removeItem("refreshToken");
          navigate("/login");
        } else {
          console.log(error.response);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card
      title="Upcoming Bill"
      desc={bill.bills.map((bill) => {
        return (
          <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
            <div className="flex">
              <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
                <span className="text-xs">{bill.month}</span>
                <span className="text-2xl font-bold">{bill.date}</span>
              </div>
              <div className="">
                <img className="h-6" src={`/images/${bill.logo}`} />
                <span className="font-bold">{bill.name}</span>
                <br />
                <span className="text-xs">Last Charge - {bill.lastCharge}</span>
              </div>
            </div>
            <div className="flex place-content-center flex-col">
              <span className="p-2 border rounded-lg font-bold text-center">
                ${bill.amount}
              </span>
            </div>
          </div>
        );
      })}
      loading={isLoading}
    ></Card>
  );
};

export default CardBill;
