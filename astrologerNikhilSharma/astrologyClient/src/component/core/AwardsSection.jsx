import React from "react";
import AwardCard from "../common/AwardCard"; // Import the AwardCard component

const awardsData = [
  {
    imageSrc: "/path/to/award1.jpg",
    description: "'Champion of Change' Award 2023",
  },
  {
    imageSrc: "/path/to/award2.jpg",
    description: "National Glory Award 2022 for the Best Astrologer in India",
  },
  {
    imageSrc: "/path/to/award3.jpg",
    description: "Most Trusted Astrologer Award",
  },
  {
    imageSrc: "/path/to/award4.jpg",
    description: "Best Astrologer Award",
  },
  // Add more awards here as needed
];

const AwardsSection = ({ title }) => {
  return (
    <div className="bg-red-900 py-8">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {awardsData.map((award, index) => (
          <AwardCard
            key={index}
            imageSrc={award.imageSrc}
            description={award.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
