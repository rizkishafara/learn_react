import Button from "../Elements/Button";
import Checkbox from "../Elements/CheckBox";
import Labeledinput from "../Elements/LabeledInput";

const FormSignIn = () => {
  return (
    <form action="">
      <Labeledinput
        label="Email address"
        type="email"
        placeholder="hello@example.com"
        name="email"
      />
      <Labeledinput
        label="Password"
        type="password"
        placeholder="*************"
        name="password"
      />
      <Checkbox label="Keep me signed in" name="status" />
      <Button variant="bg-primary w-full text-white">Login</Button>
    </form>
  );
};

export default FormSignIn;
