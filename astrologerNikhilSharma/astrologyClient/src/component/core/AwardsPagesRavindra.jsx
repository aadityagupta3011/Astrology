import React from "react";

const AwardsPagesRavindra = () => {
  const awards = [
    {
      title: "Astrologer Nikhil Sharma Receives Award From Actress Nora Fatehi",
      date: "January 30, 2024",
      description:
        "On the glamorous evening of January 30, 2024, in Mumbai, the prestigious Champions of Change Awards ceremony took place, celebrating individuals who have made a lasting impact on society. Among the esteemed awardees was Astrologer Nikhil Sharma, who was recognized for his exceptional expertise in astrology and his tireless dedication to community service. Presented by the renowned actress Nora Fatehi, the 'Champion of Change' Award 2023 acknowledged Nikhil Sharma’s influence in providing guidance through astrology, helping many navigate life's challenges with confidence and insight. The star-studded event was a true testament to his work and contributions.",
      imgSrc: "public/images/gettingAward.jpg", // replace with your actual image source
    },
    {
      title: 'National Award for the "Best Astrologer in India" from Actor Sonu Sood',
      date: "October 1, 2022",
      description:
        "Renowned astrologer Nikhil Sharma was honored with the prestigious National Award for his exceptional contributions to the field of astrology. The award was presented by the well-known actor and humanitarian, Sonu Sood, in recognition of Nikhil Sharma's years of dedicated service and accurate predictions, which have helped countless individuals find guidance and clarity in their lives. The ceremony took place in a grand event attended by eminent personalities from various fields, celebrating the profound impact of astrology in the modern world.",
      imgSrc: "public/images/gettingAwardFromSonu.jpg", // replace with your actual image source
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">
        Awards & Achievements
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <div className='flex flex-col gap-8'> */}
        {awards.map((award, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={award.imgSrc}
              alt={award.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-red-600 mb-2">
                {award.title}
              </h2>
              <p className="text-gray-500 text-sm mb-2">{award.date}</p>
              <p className="text-gray-700">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsPagesRavindra;
