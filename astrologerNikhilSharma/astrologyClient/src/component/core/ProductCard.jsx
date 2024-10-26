import React from "react";

// ProductCard only for the Image part
const ProductCard = ({ imageSrc }) => {
  return (
    <div className="w-full h-40 mb-4">
      <img src={imageSrc} alt="Product" className="w-full h-full object-cover rounded-lg" />
    </div>
  );
};

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

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-300 to-red-400 p-4">
      <h1 className="text-center text-4xl font-bold text-white mb-8">Yantra Products</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        
        {/* First Product: Image followed by Details */}
        <div className="bg-gradient-to-b from-orange-400 to-red-500 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto mb-6">
          <ProductCard imageSrc="https://www.astrologerNikhilsharma.com/yantra/images/yantra/sampurn-vivah-sukh@2x.png" />
          <ProductDetails
            title="Sampurna Vivah Sukh Yantra"
            description="Resolve all Marriage & Relationship Issues: Difficulties in Getting Married, Mangal Dosh Problem, Convincing Parents for Marriage, etc."
            priceIndia="5999"
            priceAbroad="80"
          />
        </div>

        {/* Second Product: Image followed by Details */}
        <div className="bg-gradient-to-b from-orange-400 to-red-500 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto mb-6">
          <ProductCard imageSrc="path_to_your_image_2.jpg" />
          <ProductDetails
            title="Sampurna Karyesu Yantra"
            description="Resolve all Business, Money & Career Problems: Business Loss, Uncertain Career, Financial Issues, Payments Not Coming on Time, etc."
            priceIndia="5999"
            priceAbroad="80"
          />
        </div>

      </div>
    </div>
  );
};

export default ProductPage;
