import React from "react";
import VideoSection from "../common/VideoSection";
import MainContent from "./MainContent";

const VedicAstrology = () => {
  const sidebarLinks = [
    { label: "Vashikaran Guru", url: "#" },
    { label: "Vashikaran Specialist India", url: "#" },
    { label: "Love Vashikaran for Him/Her", url: "#" },
    { label: "Love Back Specialist", url: "#" },
    { label: "Love Marriage Vashikaran", url: "#" },
    { label: "Vashikaran Mantra", url: "#" },
    { label: "Vashikaran Removal Specialist", url: "#" },
    { label: "Black Magic Removal Specialist", url: "#" },
    { label: "Powerful Vashikaran Specialist", url: "#" },
    { label: "Vashikaran Yantra", url: "#" },
    { label: "Vashikaran Success Rate", url: "#" },
    { label: "Vashikaran Success Stories", url: "#" },
  ];

  return (
    <div className="bg-white text-gray-700 p-6 text-xl mt-8">
      {/* Main flex container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Left section: Text and list */}
        <div className="flex-1">
          {/* Main text */}
          <p className="text-xl mb-8">
            The Vedic astrology services of this{" "}
            <strong>world famous astrologer</strong> are based on the Vedic
            birth chart or numerology. Then, performed scrupulously is a
            comprehensive and critical analysis of all relevant facts and
            factors, to determine the most effective solution. Lastly, the
            solution is implemented by fewer very elegant and cost-effective
            curative measures. On the other hand, the vashikaran services of
            this a hugely reliable and{" "}
            <strong>best vashikaran specialist in the world</strong>, require a
            photograph of the target person, along with his/her name.
          </p>

          {/* Problems and Questions Section */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-10 space-y-6 lg:space-y-0">
            {/* Alphabet Image */}
            <div className="flex-shrink-0 lg:order-first">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_hNKu3KU8z6ZVzQ8Z28sUWsuecSAjXvQ_w&s"
                alt="alphabet"
                className="text-6xl sm:text-9xl font-extrabold text-red-700 mx-auto lg:mx-0"
              />
            </div>

            {/* Questions List */}
            <div className="flex-1 flex flex-col space-y-4 lg:space-y-6 lg:order-last lg:ml-10">
              <ul className="list-none space-y-4">
                <li className="border-t border-b border-red-700 py-2">
                  <span className="text-lg">
                    Are You Suffering from Love Problems?
                  </span>
                </li>
                <li className="border-b border-red-700 py-2">
                  <span className="text-lg">
                    Are You Facing Marriage Related Issues?
                  </span>
                </li>
                <li className="border-b border-red-700 py-2">
                  <span className="text-lg">
                    Are You Getting Sick of Family Problems?
                  </span>
                </li>
                <li className="border-b border-red-700 py-2">
                  <span className="text-lg">
                    Are You Facing Love Inter-caste Marriage?
                  </span>
                </li>
                <li className="border-b border-red-700 py-2">
                  <span className="text-lg">
                    Are You Struggling with Business Problems?
                  </span>
                </li>
              </ul>
              <p className="text-lg mt-4 text-center lg:text-left">
                Ask 1 Question Free at <strong>+91-95091-68369</strong> Now!
              </p>
            </div>

            {/* Ganesha Image */}
            <div className="flex-shrink-0 lg:order-last">
              <img
                src="https://m.media-amazon.com/images/I/71NDiyHzBlL._AC_UF894,1000_QL80_.jpg"
                alt="Lord Ganesha"
                className="w-72 h-auto mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Closing paragraph in flex as well */}
      <div className="mt-8">
        <p className="text-lg">
          For numerous years, the exceptional offerings of this{" "}
          <strong>Top-rated astrologer specializing in vashikaran</strong> of
          the world, are also available online. These brisk online astrology and
          vashikaran services are very convenient to people located in remote
          regions. Again, counted among India's top astrologers, our grand guru
          ji has also invented two miraculous yantras, to offer faster results,
          or extra benefits. Lastly, lavish success of his top-notch services
          for love and love marriages, has rendered him a top love marriage
          specialist in India and abroad.
        </p>

        {/* MainContent component comes here */}
        <MainContent />
      </div>

      {/* VideoSection component comes at the end */}
    </div>
  );
};

export default VedicAstrology;
