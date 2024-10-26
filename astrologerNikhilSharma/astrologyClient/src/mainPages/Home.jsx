import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Header from "../component/common/Header";
import MainSection from "../component/MainSection";
import ContentSection from "../component/ContentSection";
import Sidebar from "../component/common/Sidebar";
import AwardsSection from "../component/core/AwardsSection";
import VideoSection from "../component/common/VideoSection";
import VedicAstrology from "../component/core/VedicAstrology";
import ContactBanner from "../component/core/ContactBanner";
import Specialization from "../component/core/Specialization";
import ZodiacSlider from "../component/common/ZodiacSlider";
import CaseStudiesSection from "../component/core/CaseStudiesSection";
import TestimonialContact from "../component/core/TestimonialContact";
import Footer from "../Components/Footer.jsx";
import awardCeremony from "../images/gettingAward.jpg";
import awardCeremonySonu from "../images/gettingAwardFromSonu.jpg";

const Home = () => {
  const headerData = {
    title:
      "Renowned Sharma Ji - Globally Acclaimed for Exceptional Astrological Expertise",
    description:
      "As the accomplished son of a globally renowned figure, Nikhil Sharma, a distinguished Indian astrologer, has risen to become one of the most sought-after and esteemed astrologers and vashik. Throughout his illustrious career spanning decades, he has skillfully applied his expertise in Vedic astrology and benevolent vashikaran to make a profound impact on life.",
  };

  const sidebarLinks = [
    { label: "Vashikaran Guru" },
    { label: "Vashikaran Specialist India" },
    { label: "Love Vashikaran for Him/Her" },
    { label: "Love Back Specialist" },
    { label: "Love Marriage Vashikaran" },
    { label: "Vashikaran Mantra" },
    { label: "Vashikaran Removal Specialist" },
    { label: "Black Magic Removal Specialist" },
    { label: "Powerful Vashikaran Specialist" },
    { label: "Vashikaran Yantra" },
    { label: "Vashikaran Success Rate" },
    { label: "Vashikaran Success Stories" },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        {/* Main Section */}
        <div className="w-full">
          <MainSection />
        </div>

        {/* Add here */}
        <div className="w-full px-4 py-8 bg-gradient-to-r from-purple-50 to-purple-200">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            About Sharma Ji
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-300 shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                <strong>Dubai:</strong> Al Furjan East
                <br />
                <span className="block">+971 527912616</span>
                <strong>India:</strong> Maha Laxmi Astro Dham, Kangra, Himachal
                Pradesh
                <br />
                <span className="block">+91 9509168369</span>
              </p>
            </div>

            <div className="bg-green-300 shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">
                Shree Santan Dhram Sanskrit College, Ujjain
                <br />
                Kashi, Haridwar
                <br />
                Hoshiyarpur, Punjab
              </p>
            </div>

            <div className="bg-slate-300 shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Awards</h3>
              <p className="text-gray-600">
                <strong>2021:</strong> Bollywood Actress Nora Fatehi
                <br />
                <strong>2022:</strong> Actress Malaika Arora
                <br />
                <strong>2023:</strong> Bollywood Actor Sonu Sood
                <br />
                <strong>2024:</strong> Live Interview with Sonu Sood
              </p>
            </div>

            <div className="bg-green-300 shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-600">
                Practicing astrology since childhood, following the family
                tradition since 1970. Father and grandfather were renowned
                astrologers.
              </p>
            </div>

            <div className="bg-slate-300 shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Global Presence</h3>
              <p className="text-gray-600">
                Branches in Malaysia, Mauritius, Singapore, Europe, and Dubai.
                Now based in Dubai and serving clients worldwide.
              </p>
            </div>

            <div className=" bg-green-300 shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Clientele</h3>
              <p className="text-gray-600">
                Consults with famous personalities, including Bollywood actors,
                actresses, and political figures.
              </p>
            </div>
          </div>
        </div>
        {/* Second Section */}
        <div className="w-full bg-white flex flex-col lg:flex-row lg:items-start lg:justify-between p-4 lg:p-6">
          <div className="flex-1 lg:mr-4 mb-6 lg:mb-0">
            <Header
              title={headerData.title}
              description={headerData.description}
            />
            <img src={awardCeremony} alt="" srcSet="" />
          </div>
          <div className="w-full lg:w-1/3">
            <Sidebar heading="POSITIVE VASHIKARAN" links={sidebarLinks} />
          </div>
        </div>

        {/* Third Section */}
        <div className="w-full px-4 lg:px-16 flex flex-col lg:flex-row bg-white">
          <div className="w-full lg:w-2/3">
            <ContentSection />
            <img src={awardCeremonySonu} alt="" srcSet="" />
          </div>
          <div className="w-full lg:w-1/3 mt-6 lg:mt-0"></div>
        </div>

        {/* Fourth Section */}
        <div className="w-full px-4 lg:px-16 flex flex-col lg:flex-row bg-white">
          <div className="w-full lg:w-2/3">
            <VedicAstrology />
          </div>
        </div>

        {/* Additional Sections */}
        <div className="w-full">
          <ContactBanner />
          <Specialization />
        </div>

        {/* Zodiac Slider Section */}
        <div className="bg-pink-50 w-full py-6">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">
              वार्षिक राशिफल
            </h2>
            <ZodiacSlider />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
