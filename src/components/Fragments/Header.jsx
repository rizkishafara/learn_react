import { useContext } from "react";
import Input from "../Elements/LabeledInput/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ThemeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { name } = useContext(AuthContext);
  const date = new Date().toDateString().slice(4);
  return (
    <header className={`border-b-2 p-6 flex items-center justify-between ${theme.name}`}>
      <div className="flex">
        <div className="font-bold text-lg">{name}</div>
        <div className="ms-6 text-gray-03  ">{date}</div>
      </div>
      <div className="flex">
        <div>
          <NotificationsIcon className="text-gray-01 scale-110" />
        </div>
        <div className="ms-10 hidden sm:block">
          <Input type="text" placeholder="Search" variant="bg-white w-80" />
        </div>
      </div>
    </header>
  );
};

export default Header;
