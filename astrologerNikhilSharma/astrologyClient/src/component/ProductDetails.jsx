// src/components/ProductDetails.js
import React from "react";

const ProductDetails = ({ title, description, priceIndia, priceAbroad }) => {
  return (
    <div className="text-center">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">{title}</h2>

      {/* Description */}
      <p className="mb-4 text-sm">{description}</p>

      {/* Price Information */}
      <div className="flex justify-center items-center space-x-6 mb-4">
        <div className="text-lg">
          <span className="font-semibold">₹{priceIndia}</span> + Courier Charge (India)
        </div>
        <div className="text-lg">
          <span className="font-semibold">${priceAbroad}</span> + Courier Charge (Abroad)
        </div>
      </div>

      {/* Order Button */}
      <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
        Order Now
      </button>
    </div>
  );
};

export default ProductDetails;
