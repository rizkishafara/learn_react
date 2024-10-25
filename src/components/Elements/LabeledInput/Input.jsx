const Input = (props) => {
  const {
    type,
    placeholder,
    name,
    variant = "bg-gray-100 border border-gray-300",
  } = props;

  return (
    <input
      type={type}
      className={`${variant} py-3 ps-4 text-sm  rounded-md w-full text-gray-1000 focus:border-black focus:outline-none focus:ring-0`}
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

export default Input;
