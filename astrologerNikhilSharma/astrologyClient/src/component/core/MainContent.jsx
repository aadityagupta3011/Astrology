import React from "react";
import Button from "../common/Button"; // Importing the reusable Button component

const MainContent = () => {
  // Define actions for each button

  return (
    <div className="mt-5 px-4 sm:px-6 lg:px-16 flex flex-col items-center">
      <div className="text-center w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-2">
          <Button
            label="CAN ASTROLOGY CHANGE MY DESTINY?"
            color="bg-red-700"
          />
          <Button
            label="WHY ASTROLOGER Nikhil SHARMA JI!"
            color="bg-blue-600"
          />
          <Button
            label="ASTROLOGY & VASHIKARAN SERVICES"
            color="bg-red-700"
          />
          <Button
            label="BLOG: ASTROLOGER Nikhil SHARMA"
            color="bg-blue-600"
          />
          <Button
            label="ASTROLOGY SERVICES IN UK"
            color="bg-red-700"
          />
          <Button
            label="ASTROLOGER Nikhil JI IN MEDIA"
            color="bg-blue-600"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
