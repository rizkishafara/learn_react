// import React from "react";
import Button from "../Elements/Button";
import Logo from "../Elements/Logo";

const Authlayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title } = props;

  return (
    <div className="w-full max-w-xs">
      <Logo />
      {children}
      {title !== "forgot password" ? (
        <>
          <div className="py-7 flex justify-center text-xs text-gray-03">
            <span className="bg-white px-5"> or {title} with</span>
          </div>
          <Button variant="bg-gray-05 w-full text-gray-01">
            <span className="text-dec">Continue with Google</span>
          </Button>
        </>
      ) : null}

      {title === "sign in" ? (
        <a href="/register" className="block text-center text-gray-03 mt-5">
          Create an Account
        </a>
      ) : title === "sign up" ? (
        <a href="/login" className="block text-center text-gray-03 mt-5">
          Already have an Account ?
        </a>
      ) : (
        <a href="/login" className="block text-center text-gray-03 mt-5">
          Back to Login
        </a>
      )}
    </div>
  );
};

export default Authlayout;
