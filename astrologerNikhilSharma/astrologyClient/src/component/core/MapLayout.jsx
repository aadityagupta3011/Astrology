import React from 'react';

const MapLayout = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4">
      {/* Left side: 360 view */}
      <div className="w-full md:w-1/2 p-2">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="360 view"
            src="YOUR_360_VIEW_URL_HERE"
            className="w-full h-full rounded-lg shadow-md"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Right side: Google map */}
      <div className="w-full md:w-1/2 p-2">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="Google Map"
            src="YOUR_GOOGLE_MAP_URL_HERE"
            className="w-full h-full rounded-lg shadow-md"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapLayout;
