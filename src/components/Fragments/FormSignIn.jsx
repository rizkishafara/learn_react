import Button from "../Elements/Button";
import Checkbox from "../Elements/CheckBox";
import Labeledinput from "../Elements/LabeledInput";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import SnackBar from "../Elements/SnackBar";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { NotifContext } from "../../context/notifContext";

const FormSignIn = () => {
  // const [msg, setMsg] = useState("");
  // const [open, setOpen] = useState(false);
  const { setIsLoggedIn, setName } = useContext(AuthContext);
  const { msg, setMsg, setOpen, setIsLoading } = useContext(NotifContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      setIsLoading(false);
      setOpen(true);
      setMsg({ severity: "success", desc: "Success" });

      const decodeToken = jwtDecode(response.data.refreshToken);
      // console.log(decodeToken);

      localStorage.setItem("refreshToken", response.data.refreshToken);

      setIsLoggedIn(true);
      setName(decodeToken.name);
      navigate("/");

      setOpen(true);
      setMsg({ severity: "success", desc: "Login Success" });
    } catch (error) {
      setIsLoading(false);
      if (error.response) {
        setOpen(true);
        setMsg({ severity: "error", desc: error.response.data.msg });
      }
    }
  };
  const onErrors = (errors) => console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit, onErrors)}>
      <div className="mb-6">
        <Labeledinput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
          register={{
            ...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            }),
          }}
        />
        {errors?.email && (
          <div className="text-center text-red-500">{errors.email.message}</div>
        )}
      </div>
      <div className="mb-6">
        <Labeledinput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
          register={{
            ...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }),
          }}
        />
        {errors?.password && (
          <div className="text-center text-red-500">
            {errors.password.message}
          </div>
        )}
      </div>
      <a
        href="/forgot-password"
        className="block text-right text-gray-03 dark:text-white mt-2 text-sm font-bold"
      >
        Forgot Password?
      </a>
      <div className="mb-3">
        <Checkbox label="Keep me signed in" name="status" />
      </div>
      <Button
        variant={
          !isValid
            ? "bg-gray-05 w-full text-white"
            : "bg-primary w-full text-white zoom-in"
        }
        disabled={!isValid ? "disabled" : ""}
        type="submit"
      >
        Login
      </Button>
      {msg && (
        <SnackBar
          severity={msg.severity}
          desc={msg.desc}
          open={open}
          setOpen={setOpen}
        />
      )}
    </form>
  );
};

export default FormSignIn;
