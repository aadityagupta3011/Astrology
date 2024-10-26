import React from 'react';

const Header = ({ title, description }) => {
  return (
    <header className="mb-6 px-4 sm:px-6 md:px-8 lg:px-16 w-full">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-600">
        {title}
      </h1>
      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 w-full">
        {description}
      </p>
    </header>
  );
};

export default Header;
