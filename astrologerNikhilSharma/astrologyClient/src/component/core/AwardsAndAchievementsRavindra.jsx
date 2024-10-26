import React from "react";

const AwardsAndAchievements = () => {
  return (
    <div
      className="px-4 sm:px-6 lg:px-12 py-12 bg-teal-500 min-h-screen"
      style={{ marginTop: "1rem" }}
    >
      <div className="max-w-7xl mx-auto text-white">
        {/* Title */}
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold  mb-6">
          Awards and Achievements
        </h1>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base mb-6">
          Till date, the recognitions, <strong>awards and achievements</strong>{" "}
          won by globally renowned and highly dignified astrologer Nikhil
          Sharma, have been a great many. The most recently achieved awards by
          him are the 'Kismat Connection Award of Excellence 2015', and the
          'Akhil Bhartiya Jyotish Award 2015', both of which were bestowed on
          him in April 2015 in Chandigarh and Amritsar of Punjab, respectively.
          Summarily, his ever-growing worldwide success and credibility, and
          affluent assortment of his awards and laurels, have been very
          supportive for making him more successful and generous, and living a
          life of meaningful benevolence.
        </p>

        <p className="text-xs sm:text-sm md:text-base mb-6 font-semibold">
          His lavish collection of recognitions and awards includes the
          following:
        </p>

        {/* Awards List */}
        <ul className="grid grid-cols-1 sm:grid-cols-1 gap-4 text-xs sm:text-sm md:text-base">
          {[
            "Gold Medals in Astrology and Vashikaran",
            "Lalkitab Rattan",
            "Jyotish Shiromani",
            "And, many high and dignifying recognitions in the fields of Psychic Reading, Vastu Shastra, Vashikaran, and Natural Healing.",
            "Jyotish Rattan",
            "Jyotish Visharad",
            "Jyotish Samrat",
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block text-green-400 mr-2">✔️</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AwardsAndAchievements;
