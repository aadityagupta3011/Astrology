// ZodiacSlider.jsx
import { useState } from "react";
import ZodiacCard from "../core/ZodiCard";

// Zodiac Signs Data
const zodiacSigns = [
  { name: "वृषभ", icon: "♉", letters: "ई, उ, ए, ओ, वा, वी, वू, वे, वो" },
  { name: "मिथुन", icon: "♊", letters: "का, की, कू, घ, ङ, छ, के, को, ह" },
  { name: "कर्क", icon: "♋", letters: "ही, हू, हे, हो, डा, डी, डू, डे, डो" },
  { name: "सिंह", icon: "♌", letters: "मा, मी, मू, मे, मो, टा, टी, टू, टे" },
  { name: "कन्या", icon: "♍", letters: "टो, पा, पी, पू, ष, ण, ठ, पे, पो" },
  { name: "तुला", icon: "♎", letters: "रा, री, रू, रे, रो, ता, ती, तू, ते" },
  { name: "वृश्चिक", icon: "♏", letters: "तो, ना, नी, नू, ने, नो, या, यी, यू" },
  { name: "धनु", icon: "♐", letters: "ये, यो, भा, भी, भू, धा, फा, ढा, भे" },
];

const ZodiacSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? zodiacSigns.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === zodiacSigns.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between">
        {/* Previous Button */}
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={handlePrev}
        >
          &#8249;
        </button>

        {/* Zodiac Card Slider */}
        <div className="flex overflow-hidden w-full justify-center">
          <div
            className="transform transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              display: "flex",
            }}
          >
            {zodiacSigns.map((sign, index) => (
              <div
                className="min-w-full flex-shrink-0 flex justify-center px-2"
                key={index}
                style={{
                  border: "2px solid #000", // Border for each card
                  padding: "10px", // Adding padding to cards
                }}
              >
                <ZodiacCard sign={sign} />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleNext}
        >
          &#8250;
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {zodiacSigns.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ZodiacSlider;
