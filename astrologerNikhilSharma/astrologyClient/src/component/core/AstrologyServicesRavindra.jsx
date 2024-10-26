import React from 'react';
import FAQAccordion from './FAQAccordionRavindra.jsx';

const AstrologyServices = () => {
  const services = [
    'Progeny related problems',
    'Various ailments and diseases',
    'Obscurities regarding the education/professional life and chances of studies abroad',
    'Disturbances or obstacles to the arranged marriages, love marriages, and inter-caste marriages',
    'Problems of struggling careers or celebrities',
    'Unwanted breakup, separation, or even divorce',
    'Hassles or obscurities associated with how to rekindle or reacquire the lost love or lover',
    'Confusions regarding the fruitfulness of the desired tours and travels',
    'Health, well-being, and vitality',
    'Apathy towards school or college education',
    'Problems to flourishing and enrichment of love between two persons',
    'Ignorance about the most suitable and lucrative occupation/profession',
    'All problems and quarrels probable in the married life and domesticity',
    'Hindrances and problems associated with businesses/professions',
    'Problems caused by the extramarital affair of any spouse, or a triangular love',
    'Financial uncertainties, stringencies, or fluctuations',
    'Risks and insecurities associated with new business ventures or investments',
    'Curiosities about the most productive and happy spells of life and occupation',
  ];

  return (
    <div className="bg-blue-500 text-white py-12 px-6 lg:px-24" style={{
        backgroundImage: "url('https://img.freepik.com/premium-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52571.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <h1 className="text-3xl font-bold text-center mb-6">Astrology, Healing and Vashikaran Services by Astrologer Nikhil Sharma Ji</h1>
      <p className="text-lg text-center mb-8">
        Today, the <strong>astrology, healing and vashikaran services by astrologer Nikhil Sharma Ji</strong> are hugely popular in many cities around the world, offering quick and high efficacy solutions. These services are globally credible and come with no harmful side effects.
      </p>

      <p className="text-lg text-center mb-8">
        Rather wide is the range of life's spheres served by these services of his, and extensive is the gamut of problems solvable through his solutions in every sphere.
      </p>

      <h2 className="text-2xl font-semibold text-center mb-4">These problems include the following broad categories of problems:</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
        {services.map((service, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-green-400">✔</span>
            <span>{service}</span>
          </li>
        ))}
      </ul>

      <div className="mt-14 ">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg">
          FAQs
        </button>
        <FAQAccordion/>
      </div>
    </div>
  );
};

export default AstrologyServices;
