// src/components/ProductCard.js
import React from "react";

const ProductCard = ({ imageSrc }) => {
  return (
    <div className="w-full h-40 mb-4">
      <img src={imageSrc} alt="Product" className="w-full h-full object-cover rounded-lg" />
    </div>
  );
};

export default ProductCard;
