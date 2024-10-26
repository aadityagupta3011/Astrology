import React from "react";

const AvailabilityMessage = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 flex justify-center items-center">
      <div className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg text-center">
        * Please Call to Pandit Ji at <a href="tel:+919815418307" className="underline hover:text-yellow-200">+91-95091-68369</a> for Yantra Availability in Real Time!
      </div>
    </div>
  );
};

export default AvailabilityMessage;
