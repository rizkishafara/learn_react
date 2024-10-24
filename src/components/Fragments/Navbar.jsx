import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-50 sm:w-72 w-36 min-h-screen px-7 py-12 flex flex-col justify-between">
      <div>
        <Link to="/">
          <div className="flex justify-center mb-10">Logo</div>
          <div className="flex bg-primary text-white px-4 py-3 rounded-md">
            <div className="text-white mx-auto sm:mx-0">A</div>
            <div className="ms-3 hidden sm:block">Overview</div>
          </div>
        </Link>
        <Link to="/balance">
          <div className="flex hover:bg-gray-700 px-4 py-3 rounded-md">
            <div className="mx-auto sm:mx-0">B</div>
            <div className="ms-3 text-gray-50 hidden sm:block">Balances</div>
          </div>
        </Link>
        <div className="flex hover:bg-gray-700 px-4 py-3 rounded-md">
          <div className="mx-auto sm:mx-0">C</div>
          <div className="ms-3 text-gray-50 hidden sm:block">MENU</div>
        </div>
      </div>
      <div className="sticky bottom-12">
        <div className="flex bg-gray-700 px-4 py-3 rounded-md">
          <div className="mx-auto sm:mx-0">D</div>
          <div className="ms-3 text-gray-50 hidden sm:block">Logout</div>
        </div>
        <div className="border-b my-10 border-b-special-bg"></div>
        <div className="flex justify-between">
          <div className="mx-auto sm:mx-0">foto</div>
          <div className="hidden sm:block">
            Username
            <br />
            View Profile
          </div>
          <div className="hidden sm:block">icon</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
