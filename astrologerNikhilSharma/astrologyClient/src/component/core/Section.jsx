import React from 'react';

const Section = ({ leftText, rightText }) => {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-orange-500 py-10 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-yellow-300 text-3xl md:text-4xl font-bold mb-6">
          Astrology and Vashikaran Yantra
        </h2>

        {/* Paragraphs passed as props */}
        <p className="text-white text-lg leading-relaxed mb-6">
          {leftText}
        </p>

        <p className="text-white text-lg leading-relaxed">
          {rightText}
        </p>
      </div>
    </section>
  );
};

export default Section;
