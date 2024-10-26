import React from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";

const AstrologyBanner = ({ linkText, linkHref, description }) => {
  return (
    <div className="bg-gradient-to-t from-gray-200 via-white to-gray-100 py-1 px-1 sm:px-12 pt-6 pb-3">
  
      <div className="flex flex-col sm:flex-row justify-start  items-center text-center sm:text-left">
        <a 
          href={linkHref} 
          className="text-red-700 font-semibold text-lg sm:text-xl hover:underline mb-2 sm:mb-0 flex items-center ml-3"
        >
          {linkText}
          <FaAngleDoubleRight className='ml-3' />
        </a>
        <span className="text-gray-700 font-medium text-base sm:text-lg ml-7">
          {description}
        </span>
      </div>
    </div>
  );
};

export default AstrologyBanner;
