import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ForgotPassPage from "./pages/ForgotPass";

const App = () => {
  // return (
  //   <div className="flex justify-center min-h-screen items-center">
  //     <SignInPage />
  //   </div>
  // );
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
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
  ]);
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
