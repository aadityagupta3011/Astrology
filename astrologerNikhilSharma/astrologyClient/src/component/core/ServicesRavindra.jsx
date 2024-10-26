import React from "react";

const Services = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-12 bg-gray-50 mt-4 opacity-10">
      <div className="max-w-full lg:max-w-5xl mx-auto opacity-90">
        {/* Title */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mb-8 ">
          Astrology, Healing and Vashikaran Services
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 text-center">
          Highly efficacious and fully harmless <strong>astrology, healing, and vashikaran services</strong> have
          proved to be like elixir to the troubled and suffering people and entities of the world, helping to free them from their respective problems and troubles. The most impressive and elusive qualities of these services are: sure and high efficacy; reasonable service charges; no harmful side effects; globally acclaimed credibility; complete confidentiality; and generous policies for his Indian and global clients.
        </p>

        {/* Services List */}
        <ul className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
          {[
            "Problems related with blossoming of love affairs, withering relationships, breakup in love, and rekindling lost love.",
            "Problems and obstacles to love marriages, arranged marriages, and inter-caste marriages.",
            "Hindrances and uncertainties related to businesses and professions in various fields.",
            "Various health ailments and diseases.",
            "Apathy of children and college students towards education.",
            "Uncertainty about the most suitable and profitable occupational options.",
            "Regular clashes, disputes, and quarrels between husband and wife.",
            "Cold, distant, or rifting relationships with family members.",
            "Insecurities and uncertainties associated with investments or new business ventures.",
            "Struggling careers of celebrities in sports, films, politics, etc.",
            "Absence of peace, progress, and harmony in married or domestic life.",
            "Breaking relations with friends, relatives, business partners, employers, etc.",
            "Anxieties about the fruitfulness of desired domestic or foreign tours or travels.",
            "Unwanted breakup, separation, extramarital affair, or divorce.",
            "Issues with children, spouse, lover, or business partner going out of control.",
            "Triangular love affairs or social enmities.",
            "Progeny-related problems."
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block text-green-500 mr-2">✔️</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
