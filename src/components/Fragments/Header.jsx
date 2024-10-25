import Input from "../Elements/LabeledInput/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <header className="border-b-2 p-6 flex items-center justify-between">
      <div className="flex">
        <div className="font-bold text-lg">Username</div>
        <div className="ms-6 text-gray-400  ">Oct 17, 2024</div>
      </div>
      <div className="flex">
        <div>
          <NotificationsIcon className="text-gray-500 scale-110" />
        </div>
        <div className="ms-10 hidden sm:block">
          <Input type="text" placeholder="Search" variant="bg-white w-80" />
        </div>
      </div>
    </header>
  );
};

export default Header;
