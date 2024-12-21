import Input from "./Input";
import Label from "./Label";

const LabeledInput = (props) => {
  const { label, name, type, placeholder, register } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        register={register}
      />
    </div>
  );
};

export default LabeledInput;
