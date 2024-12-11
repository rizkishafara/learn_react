import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ForgotPassPage from "./pages/ForgotPass";
import DashboardPage from "./pages/Dashboard";
import BalancePage from "./pages/Balance";
import ExpensesPage from "./pages/Expenses";
import GoalPage from "./pages/Goals";

const App = () => {
  // return (
  //   <div className="flex justify-center min-h-screen items-center">
  //     <SignInPage />
  //   </div>
  // );
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
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
        <BalancePage />
      ),
    },
    {
      path: "/expenses",
      element: (
        <ExpensesPage />
      ),
    },
    {
      path: "/goal",
      element: (
        <GoalPage />
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
