import React from "react";
import Navbar from "../Components/Navbar";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import astrologyLinks from "../Data/astrologySpecialist/astrologyLinks.js";
import astrologyCountry from "../Data/astrologySpecialist/astrologyCountry.js";
import astrologyIndia from "../Data/astrologySpecialist/astrologyIndia.js";
import Footer from "../Components/Footer.jsx";
import YtQuery from "../Components/YtQuery.jsx";

const AstrologySpecialist = () => {
  return (
    <>
      <Navbar />
      <div className=" p-2 hidden custom-md:inline-flex">
        {/* Sidebar (aside) */}
        <div className="min-w-[25vw]">
    <aside className="border-black border-2 p-0.5 h-[150vh] overflow-scroll mt-10 animate-slideIn">
      <div className="bg-red-700 text-white p-1 font-bold border-black border-2">
        <span>Astrology Services</span>
      </div>
      <div>
        <ul>
          {astrologyLinks.map((items) => (
            <li
              className="border-b-2 border-black border-dotted mx-2 m-1 p-1 flex items-center"
              key={items.title}
            >
              <MdOutlineArrowRight />
              <Link to={"/"}>{items.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>

          <aside className=" border-black border-2 p-0.5 mt-10">
            <div className="bg-red-700 text-white p-1 font-bold border-black border-2">
              <span>World Famous Astrologer</span>
            </div>
            <div>
              <ul>
                {astrologyCountry.map((items) => (
                  <li
                    className="border-b-2 border-black border-dotted mx-2 m-1 p-1 flex items-center"
                    key={items.title}>
                    <MdOutlineArrowRight />
                    <Link to={"/"}>{items.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <aside className=" border-black border-2 p-0.5 mt-10">
            <div className="bg-red-700 text-white p-1 font-bold border-black border-2">
              <span>Astro Services in India</span>
            </div>
            <div>
              <ul>
                {astrologyIndia.map((items) => (
                  <li
                    className="border-b-2 border-black border-dotted mx-2 m-1 p-1 flex items-center"
                    key={items.title}>
                    <MdOutlineArrowRight />
                    <Link to={"/"}>{items.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Main Content */}
        <div className="pl-4">
          <div className="contentSection p-4">
            <div className="flex">
              <div>
                {/* Main Heading */}
                <h1 className="text-2xl font-bold mt-8">
                  Astrology Specialist
                </h1>

                {/* Paragraphs */}
                <p className="mt-4">
                  Astrology, a centuries-old practice, is widely recognized for
                  its ability to predict provide effective solutions to a
                  variety of life's challenges. Its significant impact on
                  people's well-being, health, happiness, and success globally
                  cannot be overstated. This webpage has been created with the
                  intention of educating individuals and offering astrological
                  guidance to help alleviate their troubles.
                </p>
                <p className="mt-4">
                  {" "}
                  <strong>Nikhil Sharma</strong>, a highly knowledgeable and
                  perceptive astrologer, is widely trusted and renowned in
                  India, Asia, and around the globe. With many of expertise in
                  the intricate realm of astrology, he assists individuals in
                  resolving a wide range of life issues.
                </p>

                {/* Awards List */}
                <ul className="mt-4 list-disc list-inside space-y-2">
                  <li>❶ Gold Medal in Astrology,</li>
                  <li>❷ Lalkitab Rattan,</li>
                  <li>❸ Jyotish Visharad,</li>
                  <li>❹ Jyotish Samrat,</li>
                  <li>❺ Jyotish Shiromani, etc.</li>
                </ul>
              </div>
              <YtQuery />
            </div>

            <p className="mt-4">
              So far, he has helped myriads of troubled and aggrieved people of
              the world over, about 10,000 of them have become enthusiastic and
              committed clients of him.
            </p>

            <div className="midContentBox bg-gray-100 p-4 rounded shadow my-6">
              <p>
                Swift And Effective Solution Through{" "}
                <strong>Healing & Meditation</strong> By{" "}
                <i>Astrologer Nikhil Sharma</i>{" "}
                <span>
                  <a href="tel:+91-95091-68369" className="tel text-blue-500">
                    +91-95091-68369
                  </a>
                </span>{" "}
                <a href="mailto:info@astrologerNikhilsharma.com">
                  info@AstrologerNikhilSharma.com
                </a>
              </p>
            </div>

            {/* Services Section */}
            <h2 className="text-xl font-bold mt-8">
              All Astrology Services by Astrologer Nikhil Sharma
            </h2>

            <p className="mt-4">
              Our expert astrologer offers exceptional and transformative
              astrology services that cater to a wide range of life's critical
              areas, addressing various aspects that impact individuals
              significantly. Furthermore, these{" "}
              <strong>astrologically-based solutions</strong> are affordably
              priced, making them accessible to everyone, particularly those
              from underprivileged backgrounds.
            </p>

            <p className="mt-4">
              Our expert astrologer in Chandigarh, India, offers effective,
              secure, and affordable solutions to a wide range of common to
              unusual issues across various aspects of life, providing reliable
              correction and elimination of problems astrology services.
            </p>

            {/* Services List */}
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Businesses and Professions</li>
              <li>Love and Romance</li>
              <li>Arranged, Love, and Inter-caste Marriages</li>
              <li>Familial or Domestic Life</li>
              <li>
                Relations with Relatives, Friends, Neighbors, Business Partners,
                Employer, etc
              </li>
              <li>Progeny</li>
              <li>Health Problems</li>
              <li>Education and Career Selection</li>
              <li>Progress and Growth in Careers/Professions/Businesses</li>
              <li>Relationship between Two Persons in Love</li>
              <li>Compatibility and Harmony between Husband and Wife</li>
              <li>Tours and Travels</li>
              <li>
                Unreasonable Conflicts, Uneasiness, and Discomfort in Home
              </li>
              <li>Business and Professional Ventures</li>
              <li>Investments in Stock Market or Real Estate</li>
              <li>Money and Finances</li>
            </ul>

            <p className="mt-4">
              And, many other Spheres of Private, Familial, Occupational, and
              Social Life.
            </p>

            <div className="highlightTxt bg-yellow-200 p-4 rounded shadow mt-6">
              <p>
                Readers of this web-article may rest assured that they will get
                perfect, sure-fire, and responsible astrology solutions by our
                righteous and god-fearing astrologer. To discuss with him,
                please contact readily at:{" "}
                <strong>
                  <a href="tel:+91-95091-68369" className="tel text-blue-500">
                    +91-95091-68369
                  </a>
                  ;
                </strong>{" "}
                or mail your problem to:{" "}
                <a href="mailto:info@astrologerNikhilsharma.com">
                  info@AstrologerNikhilSharma.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block custom-md:hidden mb-5 p-2">
        <div className="relative w-full animate-slideInRight ">
          
        <video width="600" controls>
        <source src="/videos/awardCeremony.mp4" type="video/mp4" />          
        </video>
        </div>

        <div className="border-2 border-red-500 p-4 mt-5 bg-gray-500 animate-slideInRight ">
          <div className="border-2 border-red-600 mb-2 p-1  ">
            <h2 className="text-xl font-bold text-red-600">
              Get Your Problem Solution
            </h2>
            <p className="text-sm italic mb-1">
              Quit Sadness, Catch Happiness!
            </p>
          </div>
          <form>
            {/* Name Input */}
            <div className="mb-2">
              <input
                type="text"
                className="border w-full p-2"
                placeholder="Name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-2">
              <input
                type="email"
                className="border w-full p-2"
                placeholder="E-mail Id"
                required
              />
            </div>

            {/* Phone Number Input */}
            <div className="mb-2">
              <input
                type="tel"
                className="border w-full p-2"
                placeholder="Phone Number"
                required
              />
            </div>

            {/* City Input */}
            <div className="mb-2">
              <input
                type="text"
                className="border w-full p-2"
                placeholder="City"
                required
              />
            </div>

            {/* Query Input */}
            <div className="mb-2">
              <textarea
                className="border w-full p-2 resize-none"
                placeholder="Your Query"
                rows="4"
                required></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-red-600 text-white font-bold py-2 px-4 w-full">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div>
          {/* Main Heading */}
          <h1 className="text-2xl font-bold mt-8">Astrology Specialist</h1>

          {/* Paragraphs */}
          <p className="mt-4">
                  Astrology, a centuries-old practice, is widely recognized for
                  its ability to predict provide effective solutions to a
                  variety of life's challenges. Its significant impact on
                  people's well-being, health, happiness, and success globally
                  cannot be overstated. This webpage has been created with the
                  intention of educating individuals and offering astrological
                  guidance to help alleviate their troubles.
          </p>
          <p className="mt-4">
                  {" "}
                  <strong>Nikhil Sharma</strong>, a highly knowledgeable and
                  perceptive astrologer, is widely trusted and renowned in
                  India, Asia, and around the globe. With many of expertise in
                  the intricate realm of astrology, he assists individuals in
                  resolving a wide range of life issues.
          </p>

          {/* Awards List */}
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>❶ Gold Medal in Astrology,</li>
            <li>❷ Lalkitab Rattan,</li>
            <li>❸ Jyotish Visharad,</li>
            <li>❹ Jyotish Samrat,</li>
            <li>❺ Jyotish Shiromani, etc.</li>
          </ul>
        </div>
        <div className="p-2 mb-2">
          <p className="mt-4">
            So far, he has helped myriads of troubled and aggrieved people of
            the world over, about 10,000 of them have become enthusiastic and
            committed clients of him.
          </p>

          <div className="midContentBox bg-gray-100 p-4 rounded shadow my-6">
            <p>
              Swift And Effective Solution Through{" "}
              <strong>Healing & Meditation</strong> By{" "}
              <i>Astrologer Nikhil Sharma</i>{" "}
              <span>
                <a href="tel:+91-95091-68369" className="tel text-blue-500">
                  +91-95091-68369
                </a>
              </span>{" "}
              <a href="mailto:info@astrologerNikhilsharma.com">
                info@AstrologerNikhilSharma.com
              </a>
            </p>
          </div>

          {/* Services Section */}
          <h2 className="text-xl font-bold mt-8">
            All Astrology Services by Astrologer Nikhil Sharma
          </h2>

          <p className="mt-4">
            The top-notch, rather effective, and life-building{" "}
            <strong>astrology services</strong> of our discerning astrologer
            cover almost all highly important and viral fields/spheres of life.
            Moreover, these services and solutions based on astrology are just
            reasonably charged to please all, especially people of the deprived
            section of the society.
          </p>

          <p className="mt-4">
            Almost all normal to odd types of problems and troubles related with
            each of the following broad areas are adroitly, safely, and
            economically solvable, correctible, or eradicable by the services of
            our astrology specialist of India, well-based in Chandigarh:
          </p>

          {/* Services List */}
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li>Businesses and Professions</li>
            <li>Love and Romance</li>
            <li>Arranged, Love, and Inter-caste Marriages</li>
            <li>Familial or Domestic Life</li>
            <li>
              Relations with Relatives, Friends, Neighbors, Business Partners,
              Employer, etc
            </li>
            <li>Progeny</li>
            <li>Health Problems</li>
            <li>Education and Career Selection</li>
            <li>Progress and Growth in Careers/Professions/Businesses</li>
            <li>Relationship between Two Persons in Love</li>
            <li>Compatibility and Harmony between Husband and Wife</li>
            <li>Tours and Travels</li>
            <li>Unreasonable Conflicts, Uneasiness, and Discomfort in Home</li>
            <li>Business and Professional Ventures</li>
            <li>Investments in Stock Market or Real Estate</li>
            <li>Money and Finances</li>
          </ul>

          <p className="mt-4">
            And, many other Spheres of Private, Familial, Occupational, and
            Social Life.
          </p>

          <div className="highlightTxt bg-yellow-200 p-4 rounded shadow mt-6">
            <p>
              Readers of this web-article may rest assured that they will get
              perfect, sure-fire, and responsible astrology solutions by our
              righteous and god-fearing astrologer. To discuss with him, please
              contact readily at:{" "}
              <strong>
                <a href="tel:+91-95091-68369" className="tel text-blue-500">
                  +91-95091-68369
                </a>
                ;
              </strong>{" "}
              or mail your problem to:{" "}
              <a href="mailto:info@astrologerNikhilsharma.com">
                info@AstrologerNikhilSharma.com
              </a>
            </p>
          </div>
        </div>

        <div>
          <aside className=" border-black border-2 p-0.5  mt-10">
            <div className="bg-red-700 text-white p-1 font-bold border-black border-2">
              <span>Astrology Services</span>
            </div>
            <div>
              <ul>
                {astrologyLinks.map((items) => (
                  <li
                    className="border-b-2 border-black border-dotted mx-2 m-1 p-1 flex items-center"
                    key={items.title}>
                    <MdOutlineArrowRight />
                    <Link to={"/"}>{items.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <aside className=" border-black border-2 p-0.5 mt-10">
            <div className="bg-red-700 text-white p-1 font-bold border-black border-2">
              <span>World Famous Astrologer</span>
            </div>
            <div>
              <ul>
                {astrologyCountry.map((items) => (
                  <li
                    className="border-b-2 border-black border-dotted mx-2 m-1 p-1 flex items-center"
                    key={items.title}>
                    <MdOutlineArrowRight />
                    <Link to={"/"}>{items.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <aside className=" border-black border-2 p-0.5 mt-10">
            <div className="bg-red-700 text-white p-1 font-bold border-black border-2">
              <span>Astro Services in India</span>
            </div>
            <div>
              <ul>
                {astrologyIndia.map((items) => (
                  <li
                    className="border-b-2 border-black border-dotted mx-2 m-1 p-1 flex items-center"
                    key={items.title}>
                    <MdOutlineArrowRight />
                    <Link to={"/"}>{items.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AstrologySpecialist;
