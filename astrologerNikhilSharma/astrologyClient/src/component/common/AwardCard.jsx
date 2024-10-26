import React from "react";

const AwardCard = ({ imageSrc, title, description }) => {
  return (
    <div className="border-2 border-dashed border-gray-400 p-4">
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover h-64 w-full"
        />
        <div className="absolute bottom-0 bg-opacity-60 bg-gray-800 text-white text-center py-2 w-full">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
