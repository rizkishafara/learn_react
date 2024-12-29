import Button from "../Elements/Button";
import Logo from "../Elements/Logo";
import { useContext } from "react";
import { NotifContext } from "../../context/notifContext";
import SimpleBackdrop from "../Elements/Backdrop";
import CustomizedSnackbars from "../Elements/SnackBar";
import * as motion from "motion/react-client";

const Authlayout = (props) => {
  const { children, title } = props;
  const { msg, setMsg, open, setOpen, isLoading, setIsLoading } =
    useContext(NotifContext);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-special-mainBg">
      {isLoading && (
        <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
      )}
      {msg && (
        <CustomizedSnackbars
          severity={msg.severity}
          message={msg.message}
          open={open}
          setOpen={setOpen}
        />
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="w-full max-w-xs"
      >
        <Logo />
        {children}
        {title !== "forgot password" ? (
          <>
            <div className="py-7 flex justify-center text-xs text-gray-03">
              <span className="bg-white px-5"> or {title} with</span>
            </div>
            <Button variant="bg-gray-05 w-full text-gray-01 flex items-center justify-center space-x-2">
              <img
                src="images/google.png"
                className="w-5 h-5"
                alt="Google logo"
              />
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
      </motion.div>
    </div>
  );
};

export default Authlayout;
