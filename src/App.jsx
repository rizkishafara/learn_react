import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";

const App = () => {
  // return (
  //   <div className="flex justify-center min-h-screen items-center">
  //     <SignInPage />
  //   </div>
  // );
  const myRouter = createBrowserRouter([
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
  ]);
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
