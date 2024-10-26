import React from "react";
import Navbar from "../Components/Navbar";
import YtQuery from "../Components/YtQuery";
import Footer from "../Components/Footer.jsx";
import { useState } from "react";
import gettingAward from "../images/gettingAward.jpg"
import { Link , useParams } from "react-router-dom";

const SimilarPage = ({ Content,Title }) => {
  // State to track the active list item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle the click on a list item
  const handleItemClick = (index) => {
    // Toggle visibility of the paragraph
    setActiveIndex(index === activeIndex ? null : index);
  };
  const handleSlug = () => {
    
const {slug} = useParams()
  }
  return (
    <>
    <Navbar />
      <div className="contentSection p-4">
        <h1 className="border-b-2 border-black font-bold text-2xl">
          {Content[0].Page1heading1}
        </h1>
        <div>
          <div className="hidden custom-md:flex text-justify mt-2">
            <div>
              {Content[0].Page1para1.map((item, index) => (
                <p key={index}> {item} </p>
              ))}
                {Content[0].Page1heading2 && (
                  
              <h1 className="border-b-2 border-black font-bold text-2xl">
                {Content[0].Page1heading2}
              </h1>
                )}

{Content[0].Page1para2 && 
  Content[0].Page1para2.map((item, index) => (
    <p key={index}> {item} </p>
  ))
}

            </div>
            
            <div className="ml-5">
              <YtQuery />
            </div>
          </div>
          <div className="block custom-md:hidden text-justify">
            <div>
              <YtQuery />
            </div>
            <div>
              {Content[0].Page1para1.map((item, index) => (
                <p key={index}> {item} </p>
              ))}
              {Content[0].Page1heading2 && (
                
              <h1 className="border-b-2 border-black font-bold text-2xl">
                {Content[0].Page1heading2}
              </h1>
              )}
              {Content[0].Page1para2 && 
                Content[0].Page1para2.map((item, index) => (
                <p key={index}> {item} </p>
              ))
              }
            </div>
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

        {/* Middle Section */}

        <div>
          <h2 className="text-2xl font-bold mb-4">{Content[0].heading2}</h2>
          <div className="hidden custom-md:flex">
            <div className="w-[70vw] items-center justify-center">
              <>
                {Content[0].para2.map((item, index) => (
                  <p className="mb-4" key={index}>
                    {item}
                  </p>
                ))}
              </>

              <ul className="list-disc pl-5 mb-6 space-y-2">
                {Content[0].ul2.map((item, index) => (
                  <li key={index}> {item}</li>
                ))}
              </ul>
            </div>

            <div className="contentImage ml-4 w-[40vw]">
              <img
                src={gettingAward}
                alt="Best Astrology Services | Call at +91-9509168369"
                title="Best Astrology Services | Call at +91-9509168369"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="block custom-md:hidden">
            <div className="contentImage ml-4 ">
              <img
                src={gettingAward}
                alt="Best Astrology Services | Call at +91-95091-68369"
                title="Best Astrology Services | Call at +91-95091-68369"
                className="w-full object-cover"
              />
            </div>
            <div className=" items-center justify-center">
              <>
                {Content[0].para2.map((item, index) => (
                  <p className="mb-4" key={index}>
                    {item}
                  </p>
                ))}
              </>

              <ul className="list-disc pl-5 mb-6 space-y-2">
                {Content[0].ul2.map((item, index) => (
                  <li key={index}> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {Content[0].heading3 && (
          
        <h2 className="text-2xl font-bold mb-4">{Content[0].heading3}</h2>
        )}
{Content[0].para3 && (
  
        <>
          {Content[0].para3.map((item, index) => (
            <p key={index} className="mb-4">
              {item}
            </p>
          ))}
        </>

)}

{Content[0].ul3 && (
  
        <ul className="list-disc pl-5 mb-6 space-y-2">
          {Content[0].ul3.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
        </ul>
)}

        {Content[0].heading4 && (
          <h2 className="text-2xl font-bold mb-4">{Content[0].heading4}</h2>
        )}
        {Content[0].para4 && (
          <>
            {Content[0].para4.map((item, index) => (
              <p key={index} className="mb-4">
                {item}
              </p>
            ))}
          </>
        )}

        {Content[0].heading5 && (
          <h2 className="text-2xl font-bold mb-4">{Content[0].heading5}</h2>
        )}
        {Content[0].para5 && (
          <>
            {Content[0].para5.map((item, index) => (
              <p key={index} className="mb-4">
                {item}
              </p>
            ))}
          </>
        )}

        <div className="faq mt-8">
          <h3 className="text-xl font-bold mb-4  ">
            <span className="bg-neutral-600 p-1 text-white">FAQs</span>
          </h3>

          <div>
            <ul className="bg-green-300 p-2">
              {Content[0].faq[0].heading.map((item, index) => (
                <li className="border-green-500 border-b-2" key={index}>
                  <div
                    onClick={() => handleItemClick(index)}
                    className="cursor-pointer pl-2 p-3">
                    {item}
                  </div>

                  {activeIndex === index && (
                    <p className="mt-2 pl-1 bg-white">
                      {Content[0].faq[0].answers[index]}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-yellow-200 p-4 rounded-md mt-2">
          <p className="text-gray-700">
            For harnessing his globally-acclaimed and marvelous astrology
            solutions for various problems of life, frustrated or failed people
            may readily call over:
            <strong>
              <a
                href="tel:+91-95091-68369"
                className="text-blue-600 underline ml-1">
                +91-95091-68369
              </a>
            </strong>
            ; or share their problems confidentially at:
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

        <div className="bg-red-400 p-4 border-2 border-black m-2">
          <ul className="grid custom-md:grid-cols-3 gap-4">
            {Content[0].placesNames.map((item, index) => (
              <li>
                <Link to={`${Title}${item.pathName}`} key={index}>
                  {" "}
                  {Content[0].placesNames[index].placeTitle}
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

export default SimilarPage;
