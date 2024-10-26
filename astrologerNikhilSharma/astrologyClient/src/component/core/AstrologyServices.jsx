import React from 'react';

// Sample list of services
const astrologyServices = [
  "Astrology by Name & DOB",
  "Astrology Reports",
  "Astrologer in India",
  "Love Astrology",
  "Marriage Astrology",
  "Second Marriage",
  "Child Adoption Astrology",
  "Corporate Astrology",
  "Financial Astrology",
  "Political Astrology",
  "Love Specialist Astrologer",
  "Love Marriage Astrology",
  "Astro Services to Celebrities",
  "Spell Specialist & Spell Caster",
  "Birth Chart Analysis",
];

const AstrologyServices = () => {
  return (
    <div className="p-4 max-w-xs border rounded-lg shadow-md bg-white">
      {/* Heading */}
      <h2 className="text-xl font-bold text-red-600 mb-4">ASTROLOGY SERVICES</h2>

      {/* Service List */}
      <ul className="space-y-2">
        {astrologyServices.map((service, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 border-b border-gray-200 pb-2"
          >
            {/* Icon */}
            <span className="text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-6.518-3.865A1 1 0 007 8.117v7.764a1 1 0 001.234.97l6.518-3.864a1 1 0 000-1.734z"
                />
              </svg>
            </span>
            {/* Service Name */}
            <span className="text-gray-700">{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AstrologyServices;
