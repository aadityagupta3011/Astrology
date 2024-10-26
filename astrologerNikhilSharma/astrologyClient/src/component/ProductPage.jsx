import React from "react";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-300 to-red-400 p-4">
      <h1 className="text-center text-4xl font-bold text-white mb-8">Yantra Products</h1>
      
      {/* Grid for Product Images only */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        
        {/* First Product: Image inside the grid */}
        <div className="bg-gradient-to-b from-orange-400 to-red-500 p-6 rounded-lg shadow-lg max-w-md mx-auto mb-6">
          <ProductCard imageSrc="https://static.wixstatic.com/media/6f2b58_d8d9a4cc46494b41a02e642a09dff8b8~mv2.jpg/v1/fill/w_416,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rose%20quartz%20br8mm.jpg" />
        </div>

        {/* Second Product: Image inside the grid */}
        <div className="bg-gradient-to-b from-orange-400 to-red-500 p-6 rounded-lg shadow-lg max-w-md mx-auto mb-6">
          <ProductCard imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ71kg9PXuVevTT7EYUO4p9b0xyKdLYXf0AVRcNrdAV305kXROKLiDdCeX2iCgUnF4eIA&usqp=CAU" />
        </div>

         {/* First Product: Image inside the grid */}
         <div className="bg-gradient-to-b from-orange-400 to-red-500 p-6 rounded-lg shadow-lg max-w-md mx-auto mb-6">
          <ProductCard imageSrc="https://static.wixstatic.com/media/6f2b58_d8d9a4cc46494b41a02e642a09dff8b8~mv2.jpg/v1/fill/w_416,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rose%20quartz%20br8mm.jpg" />
        </div>

        {/* Second Product: Image inside the grid */}
        <div className="bg-gradient-to-b from-orange-400 to-red-500 p-6 rounded-lg shadow-lg max-w-md mx-auto mb-6">
          <ProductCard imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ71kg9PXuVevTT7EYUO4p9b0xyKdLYXf0AVRcNrdAV305kXROKLiDdCeX2iCgUnF4eIA&usqp=CAU" />
        </div>

      </div>

      {/* Product Details outside of the grid */}

      {/* First Product Details */}
      <div className="mt-8">
        <ProductDetails
          title="Sampurna Vivah Sukh Yantra"
          description="Resolve all Marriage & Relationship Issues: Difficulties in Getting Married, Mangal Dosh Problem, Convincing Parents for Marriage, etc."
          priceIndia="5999"
          priceAbroad="80"
        />
      </div>

      {/* Second Product Details */}
      <div className="mt-8">
        <ProductDetails
          title="Sampurna Karyesu Yantra"
          description="Resolve all Business, Money & Career Problems: Business Loss, Uncertain Career, Financial Issues, Payments Not Coming on Time, etc."
          priceIndia="5999"
          priceAbroad="80"
        />
      </div>

       {/* Second Product Details */}
       <div className="mt-8">
        <ProductDetails
          title="Sampurna Karyesu Yantra"
          description="Resolve all Business, Money & Career Problems: Business Loss, Uncertain Career, Financial Issues, Payments Not Coming on Time, etc."
          priceIndia="5999"
          priceAbroad="80"
        />
      </div>
       {/* Second Product Details */}
       <div className="mt-8">
        <ProductDetails
          title="Sampurna Karyesu Yantra"
          description="Resolve all Business, Money & Career Problems: Business Loss, Uncertain Career, Financial Issues, Payments Not Coming on Time, etc."
          priceIndia="5999"
          priceAbroad="80"
        />
      </div>

    </div>
  );
};

export default ProductPage;
