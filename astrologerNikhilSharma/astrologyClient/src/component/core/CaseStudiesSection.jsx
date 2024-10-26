import React from 'react';

const caseStudies = [
  {
    imageSrc: '/path-to-image/case-study-42.jpg', 
    title: 'Astrology Case Study No. 42', 
    description: 'Professional or Career Growth (Suraj Shahi)', 
    link: '#'
  },
  {
    imageSrc: '/path-to-image/case-study-41.jpg', 
    title: 'Astrology Case Study No. 41', 
    description: 'It is Never Too Late to Find a Perfect Match (Aparna Joshi)', 
    link: '#'
  },
  {
    imageSrc: '/path-to-image/case-study-41.jpg', 
    title: 'Astrology Case Study No. 41', 
    description: 'It is Never Too Late to Find a Perfect Match (Aparna Joshi)', 
    link: '#'
  },
  {
    imageSrc: '/path-to-image/case-study-41.jpg', 
    title: 'Astrology Case Study No. 41', 
    description: 'It is Never Too Late to Find a Perfect Match (Aparna Joshi)', 
    link: '#'
  },
  // Add more case studies here
];

const shubhMuhurats = [
  'Shubh Vivah Muhurats',
  'Shubh Muhurats For Namkaran',
  'Shubh Muhurats For Business',
  'Shubh Muhurats For Property Purchase',
  'Shubh Muhurats For Buying Vehicles'
];

const horoscopes = [
  'Aries Horoscope 2024',
  'Taurus Horoscope 2024',
  'Gemini Horoscope 2024',
  'Cancer Horoscope 2024',
  // Add more horoscopes here
];

const CaseStudiesSection = () => {
  return (
    <div className="container mx-auto my-12 px-4">
      <div className="flex flex-col md:flex-row">
        
        {/* Main Case Studies Section */}
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold text-center mb-8 text-red-700">
            Astrology Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="border p-4 shadow-lg">
                <img 
                  src={caseStudy.imageSrc} 
                  alt={caseStudy.title} 
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  <a href={caseStudy.link}>{caseStudy.title}</a>
                </h3>
                <p className="text-gray-700">{caseStudy.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3 md:pl-8 mt-8 md:mt-0">
          
          {/* Shubh Muhurats in 2024 */}
          <div className="bg-red-800 text-white p-4 mb-8">
            <h3 className="text-xl font-bold mb-4">Shubh Muhurats in 2024</h3>
            <ul className="space-y-2">
              {shubhMuhurats.map((muhurat, index) => (
                <li key={index} className="bg-yellow-100 text-red-900 p-2 rounded">
                  {muhurat}
                </li>
              ))}
            </ul>
          </div>

          {/* 2024 Yearly Horoscopes by Guru Ji */}
          <div className="bg-blue-800 text-white p-4">
            <h3 className="text-xl font-bold mb-4">2024 Yearly Horoscopes by Guru Ji</h3>
            <ul className="space-y-2">
              {horoscopes.map((horoscope, index) => (
                <li key={index}>
                  <a href="#" className="text-yellow-200 hover:text-yellow-300">
                    {horoscope}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
