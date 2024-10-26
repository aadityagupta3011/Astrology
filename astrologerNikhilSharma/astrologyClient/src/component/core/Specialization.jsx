import React from 'react';

const Specialization = () => {
  const services = [
    'LOVE PSYCHIC READING',
    'NADI ASTROLOGER',
    'SPIRITUAL HEALER HEALING',
    'VISA PROBLEMS',
    'REIKI MIND POWER',
    'BUSINESS ASTROLOGER',
    'EX BACK FAST',
    'CHILDLESS PROBLEM',
    'LOVE BACK MANTRA',
    'CAREER/JOB ISSUE',
    'BEST ASTROLOGER',
    'NUMEROLOGY SPECIALIST',
    'BEST WAYS TO PREVENT DIVORCE',
    'BABY NAMES BY NAKSHATRA',
    'INTERCASTE LOVE PROBLEM SOLUTION',
    'PROBLEMS IN MARRIED LIFE',
    // Add other services as needed
  ];

  const services2 = [
    'FAMILY PROBLEMS',
    'NATAL ASTROLOGY',
    'MATCH MAKING',
    'STAR SIGNS',
    'NUMEROLOGY READING',
    'HEALTH PROBLEMS',
    'ONLINE VASHIKARAN SPECIALIST',
    'HOME PEACE',
    'HYPNOTISM SPECIALIST',
    'SERVICES TO NRI',
    'ASTROLOGER COACH',
    'VASTU SPECIALIST',
    'REVIEWS Nikhil SHARMA',
    'LOVE SPELLS',
    'ONE SIDED LOVE PROBLEM SOLUTION',
    'LOVE RELATIONSHIPS PROBLEM SOLUTION',
    // Add other services as needed
  ];

  const services3 = [
    'OFFICE PROBLEMS',
    'MANGAL DOSHA REMEDIES',
    'COURT CASE PROBLEM',
    'KAAL SARP YOG REMEDY',
    'BUSINESS PROBLEM',
    'KUNDLI MAKING/MATCHING',
    'MEDITATION GURU',
    'GEMSTONES',
    'VASTU SERVICES',
    'LUCKY LOTTERY NUMBER',
    'LOST LOVE SPELLS',
    'DIVORCE PROBLEM SOLUTION',
    'HUSBAND WIFE DISPUTE',
    'LOVE DISPUTE PROBLEM',
    'LOVE TRIANGLE PROBLEMS',
    'BOYFRIEND VASHIKARAN FOR MARRIAGE',
    // Add other services as needed
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-red-600 text-4xl font-bold mb-10">
        PANDIT JI'S SPECIALIZATION
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li
              key={index}
              className={`border-b ${
                service === 'EX BACK FAST' ? 'text-red-600 font-bold' : ''
              }`}
            >
              {service}
            </li>
          ))}
        </ul>

        <ul className="space-y-2">
          {services2.map((service, index) => (
            <li key={index} className="border-b">
              {service}
            </li>
          ))}
        </ul>

        <ul className="space-y-2">
          {services3.map((service, index) => (
            <li key={index} className="border-b">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Specialization;
