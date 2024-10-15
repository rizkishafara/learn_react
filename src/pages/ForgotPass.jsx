import FormForgotPass from "../components/Fragments/FormForgotPass";
import Authlayout from "../components/Layouts/AuthLayout";

const ForgotPassPage = () => {
  return (
    <Authlayout title="forgot password">
      <FormForgotPass />
    </Authlayout>
  );
};

export default ForgotPassPage;
