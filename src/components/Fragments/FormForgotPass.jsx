import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";

const FormForgotPass = () => {
  return (
    <div>
      <div className="text-center font-bold text-xl">Forgot Password ?</div>
      <div className="text-center text-gray-03 pb-5 ">
        Enter the email address associated with your account
      </div>
      <form action="">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="Your email address"
          name="email"
        />
        <Button variant="bg-primary w-full text-white">Reset Password</Button>
      </form>
    </div>
  );
};

export default FormForgotPass;
