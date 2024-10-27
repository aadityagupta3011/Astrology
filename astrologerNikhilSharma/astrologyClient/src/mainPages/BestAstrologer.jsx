import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import YtQuery from "../Components/YtQuery";
import PlacesNames from "../Data/bestAstrologer/PlacesNames.js";
import Footer from "../Components/Footer.jsx";
import gettingAward from "../images/gettingAward.jpg"
import { Link } from "react-router-dom";

const BestAstrologer = () => {
  // State to track the active FAQ item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle the click on a FAQ item
  const handleItemClick = (index) => {
    // Toggle the visibility of the selected FAQ answer
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Navbar />

      <div className="contentSection p-4">
        {/* Desktop View */}
        <div className="hidden custom-md:flex">
          <div>
            <h1 className="text-3xl font-bold mb-4 underline pb-1">
              Best Astrologer Worldwide: Astrologer Nikhil Sharma
            </h1>
            <p className="mb-4">
              Astrologer Nikhil Sharma has garnered significant recognition and
              acclaim globally for his mastery in Vedic astrology. With over two
              decades of experience, he has provided insightful solutions to
              individuals facing challenges in various facets of life. While his
              clientele spans across Asia, North America, and Europe, he is also
              celebrated as one of the{" "}
              <strong>
                top astrologers in India, the USA, the UK, Canada, and Australia
              </strong>
              , among other countries throughout Asia and Europe.
            </p>
            <p className="mb-4">
              <strong>Based in Chandigarh, India,</strong> Astrologer Nikhil Sharma
              has extended his services to numerous locations across the country,
              offering solace and prosperity to countless individuals. His
              exceptional expertise in addressing diverse life challenges has earned
              him numerous esteemed awards and accolades. This webpage showcases his
              renowned astrology services and highlights the unique strengths of this
              globally acclaimed astrologer, aiming to support those in need of
              guidance and comfort worldwide.
            </p>
          </div>
          <div className="animate-slideInRight" >
            <YtQuery />
          </div>
        </div>

        {/* Mobile View */}
        <div className="block custom-md:hidden">
          <div className="animate-slideIn" >
            <YtQuery />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4 underline pb-1">
              Best Astrologer Worldwide: Astrologer Nikhil Sharma
            </h1>
            <p className="mb-4">
              Astrologer Nikhil Sharma has garnered significant recognition and
              acclaim globally for his mastery in Vedic astrology. With over two
              decades of experience, he has provided insightful solutions to
              individuals facing challenges in various facets of life. While his
              clientele spans across Asia, North America, and Europe, he is also
              celebrated as one of the{" "}
              <strong>
                top astrologers in India, the USA, the UK, Canada, and Australia
              </strong>
              , among other countries throughout Asia and Europe.
            </p>
            <p className="mb-4">
              <strong>Based in Chandigarh, India,</strong> Astrologer Nikhil Sharma
              has extended his services to numerous locations across the country,
              offering solace and prosperity to countless individuals. His
              exceptional expertise in addressing diverse life challenges has earned
              him numerous esteemed awards and accolades. This webpage showcases his
              renowned astrology services and highlights the unique strengths of this
              globally acclaimed astrologer, aiming to support those in need of
              guidance and comfort worldwide.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="midContentBox bg-green-700 p-4 my-4 text-white flex text-center items-center justify-center">
          <p>
            Swift and Effective Solutions Through{" "}
            <strong>Healing & Meditation</strong> by{" "}
            <i>Astrologer Nikhil Sharma</i>. Reach out via{" "}
            <span>
              <a
                href="tel:+91-95091-68369"
                className="text-blue-300 hover:underline">
                +91-95091-68369
              </a>
            </span>{" "}
            or email us at{" "}
            <a
              href="mailto:info@astrologerNikhilsharma.com"
              className="text-blue-300 hover:underline">
              info@AstrologerNikhilSharma.com
            </a>
            .
          </p>
        </div>

        {/* Detailed Services Section - Desktop */}
        <div className="hidden custom-md:flex">
          <div className="w-[70vw] items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">
              Astrology and Healing Services Worldwide by Astrologer Nikhil Sharma
            </h2>
            <p className="mb-4">
              If you are experiencing difficulties or challenges in any area of your
              life, Astrologer Nikhil Sharma is here to help. Recognized as the{" "}
              <strong>
                premier provider of astrology services in India, USA, UK, Canada, and Australia
              </strong>
              , as well as in numerous other countries across Europe and Asia, he offers
              unparalleled support. According to our esteemed astrologer, the best astrology
              services are those that effectively resolve specific issues promptly and
              permanently, all while maintaining affordable and reasonable service fees
              without any adverse side effects. His solutions are rooted in a meticulous
              and innovative analysis of each individual's birth chart.
            </p>

            <span className="block mb-4">
              Our impeccable and unmatched{" "}
              <strong>
                astrology and healing services by Astrologer Nikhil Sharma
              </strong>{" "}
              encompass the following key areas of life:
            </span>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Education and Higher Studies Abroad</li>
              <li>The Best Career and Business Opportunities</li>
              <li>Love and Romantic Affairs</li>
              <li>
                Arranged Marriage, Love Marriage, and Inter-Caste Marriage
              </li>
              <li>Married Life and Domestic Harmony</li>
              <li>Relationship Dynamics between Husband and Wife</li>
              <li>
                Breakups in Love Relationships or Extramarital Affairs of Any Spouse
              </li>
              <li>Success and Growth in Careers and Occupations</li>
              <li>Financial Stability and Wealth Management</li>
              <li>New Business Ventures and Investment Strategies</li>
              <li>
                Relationships with Neighbors, Friends, Relatives, and Business Partners
              </li>
              <li>Health and Wellness Issues</li>
              <li>Political Influences and Guidance</li>
              <li>Foreign Travels and Tours</li>
              <li>And Many Other Areas of Life</li>
            </ul>
          </div>

          <div className="contentImage ml-4 w-[40vw]">
          <img src={gettingAward} alt="" />
          </div>
        </div>

        {/* Detailed Services Section - Mobile */}
        <div className="block custom-md:hidden">
          <div className="contentImage ml-4">
          <img src={gettingAward} alt="" />
          </div>
          <div className="items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">
              Astrology and Healing Services Worldwide by Astrologer Nikhil Sharma
            </h2>
            <p className="mb-4">
              If you are experiencing difficulties or challenges in any area of your
              life, Astrologer Nikhil Sharma is here to help. Recognized as the{" "}
              <strong>
                premier provider of astrology services in India, USA, UK, Canada, and Australia
              </strong>
              , as well as in numerous other countries across Europe and Asia, he offers
              unparalleled support. According to our esteemed astrologer, the best astrology
              services are those that effectively resolve specific issues promptly and
              permanently, all while maintaining affordable and reasonable service fees
              without any adverse side effects. His solutions are rooted in a meticulous
              and innovative analysis of each individual's birth chart.
            </p>

            <span className="block mb-4">
              Our impeccable and unmatched{" "}
              <strong>
                astrology and healing services by Astrologer Nikhil Sharma
              </strong>{" "}
              encompass the following key areas of life:
            </span>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Education and Higher Studies Abroad</li>
              <li>The Best Career and Business Opportunities</li>
              <li>Love and Romantic Affairs</li>
              <li>
                Arranged Marriage, Love Marriage, and Inter-Caste Marriage
              </li>
              <li>Married Life and Domestic Harmony</li>
              <li>Relationship Dynamics between Husband and Wife</li>
              <li>
                Breakups in Love Relationships or Extramarital Affairs of Any Spouse
              </li>
              <li>Success and Growth in Careers and Occupations</li>
              <li>Financial Stability and Wealth Management</li>
              <li>New Business Ventures and Investment Strategies</li>
              <li>
                Relationships with Neighbors, Friends, Relatives, and Business Partners
              </li>
              <li>Health and Wellness Issues</li>
              <li>Political Influences and Guidance</li>
              <li>Foreign Travels and Tours</li>
              <li>And Many Other Areas of Life</li>
            </ul>
          </div>
        </div>

        {/* Best Love Astrologer Section */}
        <h2 className="text-2xl font-bold mb-4">
          Best Love Astrologer Worldwide and India - Astrologer Nikhil Sharma
        </h2>
        <p className="mb-4">
          Astrology revolves around the movements of celestial bodies such as stars and
          planets, which are believed to influence various aspects of individuals' lives.
          These cosmic movements impact areas like love, relationships, marriage, family,
          health, and career. Each planet is associated with different life events, with
          Venus specifically linked to matters of love and romantic relationships.
        </p>
        <p className="mb-4">
          The <strong>best love astrologer in India</strong> is Astrologer Pandit Nikhil Sharma Ji,
          who is renowned not only in India but also across the globe. He offers exceptional and
          beneficial{" "}
          <strong>love astrology</strong> services to individuals worldwide. Love astrology
          provides solutions for various love-related issues such as:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Lost Love</li>
          <li>Breakup Problems</li>
          <li>Misunderstandings</li>
          <li>Trust Issues</li>
          <li>Reuniting with an Ex</li>
          <li>Convincing a Girlfriend for Marriage</li>
          <li>Convincing a Boyfriend for Marriage</li>
          <li>Love Marriage Challenges</li>
          <li>Compatibility Issues</li>
          <li>Other Love-Related Problems</li>
        </ul>

        {/* FAQ Section */}
        <div className="faq mt-8">
          <h3 className="text-xl font-bold mb-4">
            <span className="bg-neutral-600 p-1 text-white">FAQs</span>
          </h3>

          <div>
            <ul className="bg-green-300 p-2">
              <li className="border-green-500 border-b-2">
                <div
                  onClick={() => handleItemClick(0)}
                  className="cursor-pointer pl-2 p-3">
                  🌈 Who is the best astrologer for resolving problems in life?
                </div>
                {activeIndex === 0 && (
                  <p className="mt-2 pl-1 bg-white">
                    Among the most esteemed and respected astrologers in India, Pt. Nikhil Sharma Ji
                    stands out as the most genuine and reliable astrologer for assisting individuals
                    in overcoming life's challenges.
                  </p>
                )}
              </li>

              <li className="border-green-500 border-b-2">
                <div
                  onClick={() => handleItemClick(1)}
                  className="cursor-pointer pl-2 p-3">
                  🌈 Why should I consult the best astrologer, Pt. Nikhil Sharma Ji?
                </div>
                {activeIndex === 1 && (
                  <p className="mt-2 pl-1 bg-white">
                    Pt. Nikhil Sharma is a revered astrologer with over two decades of experience in
                    expertly resolving various life challenges. He has assisted thousands in achieving
                    a blissful and prosperous life. The remedies he offers for life problems are:
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>Highly Effective</li>
                      <li>Affordable</li>
                      <li>Authentic</li>
                      <li>Powerful</li>
                      <li>Swift Acting</li>
                    </ul>
                  </p>
                )}
              </li>

              <li className="border-green-500 border-b-2">
                <div
                  onClick={() => handleItemClick(2)}
                  className="cursor-pointer pl-2 p-3">
                  🌈 How can I contact the best astrologer, Pt. Nikhil Sharma Ji, for my issues?
                </div>
                {activeIndex === 2 && (
                  <p className="mt-2 pl-1 bg-white">
                    If you are experiencing distress or challenges in your love life, you can reach out
                    to Pt. Nikhil Sharma Ji through the following contact details:
                    <br />
                    <strong>Direct Call/WhatsApp (India):</strong>{" "}
                    <a
                      href="tel:+91-95091-68369"
                      className="text-blue-500 hover:underline">
                      +91-95091-68369
                    </a>
                    <br />
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:info@astrologerNikhilsharma.com"
                      className="text-blue-500 hover:underline">
                      info@astrologerNikhilsharma.com
                    </a>
                    <br />
                    <strong>Skype ID:</strong> Nikhil.sharma9295
                  </p>
                )}
              </li>

              <li className="border-green-500 border-b-2">
                <div
                  onClick={() => handleItemClick(3)}
                  className="cursor-pointer pl-2 p-3">
                  🌈 Will my personal information remain confidential with Pt. Nikhil Sharma Ji?
                </div>
                {activeIndex === 3 && (
                  <p className="mt-2 pl-1 bg-white">
                    Yes, your personal information will remain completely confidential and secure
                    with Pt. Nikhil Sharma Ji. We prioritize your privacy and ensure that all your
                    data is handled with the utmost care and discretion.
                  </p>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-yellow-200 p-4 rounded-md mt-2">
          <p className="text-gray-700">
            To benefit from his globally acclaimed and effective astrology solutions for various
            life challenges, troubled or distressed individuals are encouraged to:
            <strong>
              <a
                href="tel:+91-95091-68369"
                className="text-blue-600 underline ml-1">
                +91-95091-68369
              </a>
            </strong>
            ; or share their concerns confidentially via email at:
            <strong>
              <a
                href="mailto:info@astrologerNikhilsharma.com"
                className="text-blue-600 underline ml-1">
                info@AstrologerNikhilSharma.com
              </a>
            </strong>
            .
          </p>
        </div>

        {/* Places Names Section */}
        <div className="bg-red-400 p-4 border-2 border-black m-2">
          <ul className="grid custom-md:grid-cols-3 gap-4">
            {PlacesNames.map((item, index) => (
              <li key={index}>
                <Link to={item.pathName} className="text-black hover:underline">
                  {item.placeTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BestAstrologer;
