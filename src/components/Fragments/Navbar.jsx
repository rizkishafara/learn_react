import { Link } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo";

const Navbar = () => {
  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balance",
      icon: <Icon.Balance />,
      label: "Balance",
    },
    {
      id: "transaction",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Transaction",
    },
    {
      id: "bill",
      link: "/bill",
      icon: <Icon.Bill />,
      label: "Bill",
    },
    {
      id: "expense",
      link: "/expense",
      icon: <Icon.Expenses />,
      label: "Expense",
    },
    {
      id: "goal",
      link: "/goal",
      icon: <Icon.Goal />,
      label: "Goal",
    },
    {
      id: "setting",
      link: "/setting",
      icon: <Icon.Setting />,
      label: "Setting",
    },
  ];
  return (
    <nav className="bg-gray-900 text-gray-50 sm:w-72 w-36 min-h-screen px-7 py-12 flex flex-col justify-between">
      <div>
        <div className="flex justify-center mb-10">
          <Logo variant="text-white text-2xl" />
        </div>
        {menus.map((menu) => (
          <Link key={menu.id} to={menu.link}>
            <div className="flex hover:bg-gray-700 hover:text-white px-4 py-3 rounded-md">
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block">{menu.label}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="sticky bottom-12">
        <div className="flex bg-gray-700 px-4 py-3 rounded-md">
          <div className="mx-auto sm:mx-0">
            <Icon.Logout />
          </div>
          <div className="ms-3 text-gray-50 hidden sm:block">Logout</div>
        </div>
        <div className="border-b my-10 border-b-special-bg"></div>
        <div className="flex justify-between">
          <div className="mx-auto sm:mx-0">
            <img src="images/profile.png" />
          </div>
          <div className="hidden sm:block">
            Username
            <br />
            View Profile
          </div>
          <div className="hidden sm:block self-center justify-self-end">
            <Icon.KebabMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
