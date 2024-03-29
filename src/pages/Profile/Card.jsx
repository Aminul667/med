const Card = ({ prescription }) => {
  const { firstName } = prescription;
  console.log(firstName);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-br from-blue-500 to-purple-500 bg-opacity-75 backdrop-blur-md backdrop-filter">
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2 text-white">{firstName}</div>
        <p className="text-gray-200 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          quam sed massa sollicitudin varius.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
      </div>
    </div>
  );
};

export default Card;
