const Card = (props) => {
  const { title, desc } = props;
  return (
    <>
      <div className="text-lg text-gray-02 mb-2">{title}</div>
      <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
        {desc}
      </div>
    </>
  );
};

export default Card;
