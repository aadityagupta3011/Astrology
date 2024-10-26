// ZodiacCard.jsx
const ZodiacCard = ({ sign }) => {
    return (
      <div className="w-60 p-4 border rounded-lg shadow-lg flex flex-col items-center justify-center">
        <div className="text-4xl mb-4">{sign.icon}</div>
        <div className="text-xl font-bold">{sign.name}</div>
        <div className="text-sm text-gray-500 mt-2">{sign.letters}</div>
      </div>
    );
  };
  
  export default ZodiacCard;
  