import React from "react";
import { FaCheck } from "react-icons/fa";

const DeclarationsSection = () => {
    const lifeSpheresItems = [
        "Progeny",
        "School and College Education",
        "Businesses in various Economic Fields",
        "Romance and Love Affairs",
        "Marital Life and Domesticity",
        "Business/Professional Ventures and Investments",
        "Removal of Black Magics of Evil Persons or Spirits",
        "Health, Well-being, and Diseases",
        "Career Selection and Progress",
        "Marriages of all Types",
        "Relationships with Near and Remote People",
        "National and Foreign Tours & Travels",
        "Construction of and Corrections in all types of Buildings"
      ];
  return (
    <div className="bg-gradient-to-b from-cyan-600 to-teal-400 py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Astrologer Nikhil Sharma's Declarations about His Astrology Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-6">
            <p>
              By virtue of his top-notch and miraculous solutions delivered
              punctiliously, Astrologer Nikhil Sharma has attained an enviably
              high position in the world of the sciences mentioned above, in the
              majority of countries worldwide.
            </p>

            <p>
              A large fraction of his satisfied and loyal beneficiaries of
              India and abroad believe that astrologer Nikhil Sharma can solve
              all problems swiftly, even the most complicated and chronic ones.
              To people making such sincere and appreciating comments, he just
              wants to declare that though he is opulently learned and
              experienced, he may not solve some problems readily, owing to the
              fact that there are many unaccountable and supernatural forces and
              factors inherently associated with the briskness and efficacy of
              his solutions. And, also that the overall effect of his solutions
              may vary from person to person, influenced by such factors and
              some personal or environmental reasons.
            </p>

            <p>
              Our benevolent and god-fearing guru ji believes primarily in
              offering the best possible solutions to the troubled people based
              on his affluent knowledge, leaving the efficacy of those upon the
              wishes of almighty God. He just desires to soothe troubles of
              suffering people utilizing his rich and varied disciplinary
              knowledge and life experiences. Hence, his clients should not
              think that, astrologer Nikhil Sharma would conjure away their
              problems instantly. Solutions may take due time to give optimal
              results.
            </p>
          </div>

          {/* Right Column - Quote Section */}
          <div className="  p-8 text-gray-900">
            <blockquote className="text-xl italic font-semibold ">
              <p className="mb-4">
                <span className="text-pink-500 text-2xl">“</span> I don't claim
                to be God. I just try to resolve problems of troubled people
                based on my knowledge of Astrology, Healing, Numerology,
                Meditation and Vastu which I have acquired over the years of
                sincere hard work. I provide personalized astrological
                consultation and prophecies to my clients from across the world
                by analyzing the combination of stellar positions at the time of
                birth. I can't change the course of events of life, but I can
                surely suggest effective remedies that can diminish the effect
                of any mishap and bring pleasure back into your life.{" "}
                <span className="text-pink-500 text-2xl">”</span>
              </p>
              <cite className="block mt-4 text-right">- Astrologer Nikhil Sharma</cite>
            </blockquote>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-white  mb-4">
            Best Astrologer in India - Astrologer Nikhil Sharma Ji
          </h3>
          <p className="text-white max-w-xl mx-auto ml-0">
            These days finding the best astrologer in India is like finding a
            pearl from the sea. Yes, it is true that there is a long list of
            love astrologers in India who guarantee you to bring a permanent
            solution to your love and relationship problems but few of them find
            success in it. Then the question is how to find the best and most
            reliable love astrologer for astrology remedies. Reliable, patient,
            complete knowledge of astrological facts, a devotee of Lord Ganesha,
            and most importantly highly experienced are some of the attributes
            that the best astrologer of India must-have.
          </p>
        </div>
      </div>
      <p className="text-3xl font-bold  text-white mb-8 mt-4">Here, we help will you to get introduced to the  <strong className="text-orange-100">best astrologer in india</strong></p>
      <ul className="space-y-2">
              {lifeSpheresItems.map((item, index) => (
                <div className="flex items-center gap-2">
                    <FaCheck className=""/>
                    <li key={index}> {item}</li>
          
                </div>
             
              ))}
            </ul>
    </div>
  );
};

export default DeclarationsSection;
