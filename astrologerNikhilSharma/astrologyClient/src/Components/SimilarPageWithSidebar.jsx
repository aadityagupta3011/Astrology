import React from "react";
import Navbar from "../Components/Navbar";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import astrologyLinks from "../Data/astrologySpecialist/astrologyLinks.js";
import astrologyCountry from "../Data/astrologySpecialist/astrologyCountry.js";
import astrologyIndia from "../Data/astrologySpecialist/astrologyIndia.js";
import Footer from "../Components/Footer.jsx";
import YtQuery from "./YtQuery.jsx";

const SimilarPageWithSidebar = ({ Content }) => {
  return (
    <>
      <Navbar />
      <div className=" p-2 hidden custom-md:inline-flex">
        {/* Sidebar (aside) */}
        <div className="min-w-[25vw]">
          <aside className=" border-black border-2 p-0.5 max-h-[150vh]  overflow-scroll mt-10">
            <div className="bg-red-700 text-white p-1 font-bold border-black border-2">
              <span>{Content[0].asideHeading1}</span>
            </div>
            <div>
              <ul>
                {Content[0].aside1.map((items) => (
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
            <div className="bg-red-700 text-white p-1 font-bold border-black border-2 ">
              <span>{Content[0].asideHeading2}</span>
            </div>
            <div>
              <ul>
                {Content[0].aside2.map((items) => (
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
          <aside className=" border-black border-2 p-0.5 mt-10 max-h-[120vh]  overflow-scroll ">
            <div className="bg-red-700 text-white p-1 font-bold border-black border-2">
              <span>{Content[0].asideHeading3}</span>
            </div>
            <div>
              <ul>
                {Content[0].aside3.map((items) => (
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
                {Content[0].heading && (
                  <h1 className="text-2xl font-bold mt-8">
                    {Content[0].heading}
                  </h1>
                )}

                {/* Paragraphs */}
                {Content[0].para && (
                  <div className="mt-3">
                    {Content[0].para.map((item, index) => (
                      <p key={index}> {item} </p>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-12">
                <YtQuery />
              </div>
            </div>

            <div className="midContentBox bg-green-700 p-4 my-4 text-white flex text-center items-center justify-center">
              <p>
                Swift And Effective Solution Through{" "}
                <strong>Healing & Meditation</strong> By{" "}
                <i>Astrologer Nikhil Sharma</i>{" "}
                <span>
                  <a
                    href="tel:+91-95091-68369"
                    className="text-blue-300 hover:underline">
                    +91-95091-68369
                  </a>
                </span>{" "}
                <a
                  href="mailto:info@astrologerNikhilsharma.com"
                  className="text-blue-300 hover:underline">
                  info@AstrologerNikhilSharma.com
                </a>
              </p>
            </div>

            {/* Services Section */}
            {Content[0].heading2 && (
              <h2 className="text-xl font-bold mt-8">{Content[0].heading2}</h2>
            )}

            <div className="mt-3">
              <>
                {Content[0].para2.map((item, index) => (
                  <p key={index}> {item} </p>
                ))}
              </>

              <ul className="mt-4 space-y-2 list-disc list-inside">
                {Content[0].ul2.map((item, index) => (
                  <li key={index}> {item}</li>
                ))}
              </ul>
            </div>

            {Content[0].heading3 && (
              <h2 className="text-xl font-bold mt-8">{Content[0].heading3}</h2>
            )}

            {Content[0].para3 && (
              <div className="mt-3">
                <>
                  {Content[0].para3.map((item, index) => (
                    <p key={index}> {item} </p>
                  ))}
                </>
                {Content[0].ul3 && (
                  <ul className="mt-4 space-y-2 list-disc list-inside">
                    {Content[0].ul3.map((item, index) => (
                      <li key={index}> {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Services List */}

            <div className="highlightTxt bg-yellow-200 p-4 rounded shadow mt-6">
              <p>
                Our devout and god-fearing astrologer will provide our readers
                with flawless, reliable, and responsible astrological answers,
                so they can relax. Please give him a call at{" "}
                <strong>
                  <a href="tel:+91-95091-68369" className="tel text-blue-500">
                  +91-95091-68369 
                  </a>
                  ;
                </strong>{" "}
                to discuss your issue, or send an email to{" "}
                <a href="mailto:info@astrologerNikhilsharma.com">
                info@AstrologerNikhilSharma.com.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block custom-md:hidden mb-5 p-2">
        <YtQuery />
        <div>
          {/* Main Heading */}
          <h1 className="text-2xl font-bold mt-8">{Content[0].heading}</h1>

          {/* Paragraphs */}
          <div className="mt-3">
            {Content[0].para.map((item, index) => (
              <p key={index}> {item} </p>
            ))}
          </div>

          {/* Awards List */}
        </div>
        <div className="p-2 mb-2">
          <div className="midContentBox bg-green-700 p-4 my-4 text-white flex text-center items-center justify-center">
            <p>
              Swift And Effective Solution Through{" "}
              <strong>Healing & Meditation</strong> By{" "}
              <i>Astrologer Nikhil Sharma</i>{" "}
              <span>
                <a
                  href="tel:+91-95091-68369"
                  className="text-blue-300 hover:underline">
                  +91-95091-68369
                </a>
              </span>{" "}
              <a
                href="mailto:info@astrologerNikhilsharma.com"
                className="text-blue-300 hover:underline">
                info@AstrologerNikhilSharma.com
              </a>
            </p>
          </div>

          {/* Services Section */}
          <h2 className="text-xl font-bold mt-8">{Content[0].heading2}</h2>

          <div className="mt-3">
            <>
              {Content[0].para2.map((item, index) => (
                <p key={index}> {item} </p>
              ))}
            </>

            <ul className="mt-4 space-y-2 list-disc list-inside">
              {Content[0].ul2.map((item, index) => (
                <li key={index}> {item}</li>
              ))}
            </ul>
          </div>
          {Content[0].heading3 && (
            <h2 className="text-xl font-bold mt-8">{Content[0].heading3}</h2>
          )}

          {Content[0].para3 && (
            <div className="mt-3">
              <>
                {Content[0].para3.map((item, index) => (
                  <p key={index}> {item} </p>
                ))}
              </>
              {Content[0].ul3 && (
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  {Content[0].ul3.map((item, index) => (
                    <li key={index}> {item}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Services List */}
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
          <aside className=" border-black border-2 p-0.5 mt-10">
            <div className="bg-red-700 text-white p-1 font-bold border-black border-2">
              <span>{Content[0].asideHeading1}</span>
            </div>
            <div>
              <ul>
                {Content[0].aside1.map((items) => (
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
              <span>{Content[0].asideHeading2}</span>
            </div>
            <div>
              <ul>
                {Content[0].aside2.map((items) => (
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
              <span>{Content[0].asideHeading3}</span>
            </div>
            <div>
              <ul>
                {Content[0].aside3.map((items) => (
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

export default SimilarPageWithSidebar;
