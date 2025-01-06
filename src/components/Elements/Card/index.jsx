import CircularProgress from "@mui/material/CircularProgress";
const Card = (props) => {
  const { title = false, desc, variant, loading } = props;
  return (
    <div className={`flex flex-col flex-1 mb-6 ${variant}`}>
      {title && (
        <>
          {title.length == 1 ? (
            <div className="hidden md:block md:text-lg md:text-gray-02 md:mb-4">
              {title}
            </div>
          ) : (
            <div className="text-lg text-gray-02 mb-4">{title}</div>
          )}
        </>
      )}
      {loading ? (
        <div className="bg-white rounded-lg px-6 py-5 shadow-xl flex-1">
          <div className="flex justify-center items-center h-32">
            <CircularProgress color="inherit"/>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg px-6 py-5 shadow-xl flex-1">
          {desc}
        </div>
      )}
    </div>
  );
};

export default Card;
