import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ForgotPassPage from "./pages/ForgotPass";
import DashboardPage from "./pages/Dashboard";
import BalancePage from "./pages/Balance";
import ExpensesPage from "./pages/Expenses";
import GoalPage from "./pages/Goals";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <RequireAuth><DashboardPage /></RequireAuth>,
    },
    {
      path: "/login",
      element: (
        <div className="flex justify-center min-h-screen items-center">
          <SignInPage />
        </div>
      ),
    },
    {
      path: "/register",
      element: (
        <div className="flex justify-center min-h-screen items-center">
          <SignUpPage />
        </div>
      ),
    },
    {
      path: "/forgot-password",
      element: (
        <div className="flex justify-center min-h-screen items-center">
          <ForgotPassPage />
        </div>
      ),
    },
    {
      path: "/balance",
      element: (
        <RequireAuth><BalancePage /></RequireAuth>
      ),
    },
    {
      path: "/expenses",
      element: (
        <RequireAuth><ExpensesPage /></RequireAuth>
      ),
    },
    {
      path: "/goal",
      element: (
        <RequireAuth><GoalPage /></RequireAuth>
      ),
    }
  ]);
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
