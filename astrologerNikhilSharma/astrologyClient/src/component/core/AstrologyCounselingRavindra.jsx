import React from 'react';

const AstrologyCounseling = ({ title, description ,description1 , description2 }) => {
  return (
    <div
      className=" sm:p-12"
      style={{
        backgroundImage: "url('data:image/jpeg;base64,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')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Main container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  bg-opacity-80 p-6 rounded-md">
        
        {/* Left Content */}
        <div className="md:col-span-2">
          {/* Title passed as prop */}
          <h1 className="text-red-700 text-2xl sm:text-3xl font-bold mb-4">
            {title}
          </h1>
          
          {/* Description passed as prop */}
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            {description}
            <br/>
            <br/>
            
            {description1}
            <br/>
            <br/>
           
            {description2}
          </p>
          
          {/* Subheading */}
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Love and Relationship Problems Counseling
          </h2>
          
          {/* Services List */}
          <ul className="list-none space-y-2 text-gray-700 text-base">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span> Problems and disturbances to love affairs and love marriages
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span> Conflicts and worsening relations with kith and kin
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span> Personal, familial, and social problems of lovers or spouses
            </li>
          </ul>
        </div>

        {/* Right Sidebar */}
        <div className="p-4 rounded-md  w-auto">
          {/* Video */}
          <div className="mb-4">
        <video width="600" controls>
        <source src="/videos/awardCeremony.mp4" type="video/mp4" />          
        </video>
          </div>

          {/* Immediate Solution Box */}
        </div>
      </div>
    </div>
  );
};

export default AstrologyCounseling;
