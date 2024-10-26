import React from 'react'
import AstrologyBanner from '../component/core/AstrologyBannerRavindra.jsx'
import AstrologyCounseling from '../component/core/AstrologyCounselingRavindra.jsx'
import CapabilitiesSection from '../component/core/CapabilitiesSectionRavindra.jsx'
import DeclarationsSection from '../component/core/DeclarationsSectionRavindra.jsx'
import AwardsSection from '../component/core/AwardsSection.jsx'
import Navbar from '../Components/Navbar.jsx'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet CSS for the map
const WhoIsAstrologerNikhilSharma = () => {
    const expertiseItems = [
        "Astrology",
        "Numerology",
        "Vastu Shastra",
        "Psychic Reading",
        "Positive Vashikaran",
        "Meditation and Natural Healing",
        "And, many other positive and effective sciences and therapies"
      ];
    
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
    
      const contactNumber = "+91-95091-68369";
      const email = "info@AstrologerNikhilSharma.com";
  return (
    <div>
      <Navbar />
       <AstrologyBanner 
        linkText="Pt. Nikhil Sharma World Famous Astrologer"
      /> 
      <AstrologyCounseling
        title="Who Astrologer Nikhil Sharma"
        description="This well-drafted and exclusive web-page offers answers and explanations for why astrologer Nikhil Sharma is at present one of the most capable, trustworthy, and hence tried and true, astrologers in India and nations all across the globe. During his highly opulent career crossing two decades, including one decade of global career, he helped myriads of troubled people and entities, and thus, made the lives of them highly successful, happy, and progressive, who now reside happily and peacefully in nations worldwide."
description1="Here, it is relevant to mention also that, today he is regarded as being one of the most famous and top astrologers in india, in the majority of Asian countries, and in countries worldwide. Consequently, the majority of the aggrieved and suffering people of the world, prefer to receive his astrology and other services, to find the most effective, economical, and permanent solutions to their respective problem, irrespective of the field and nature of problems.Our highly talented, erudite, and righteous astrologer guru ji has been well-bred under intelligent and sophisticated guidance of his father, who was one of the eminent astrologer-cum-vashikaran experts in India and abroad in his times. The service practices of astrologer Nikhil sharma span over two decades, and a rather wide-range of service areas (mentioned below) have been comprehensively covered by his highly refined, fail-safe, and sophisticated services.
			There are certain lavish and elusive qualities of him and his astrology and other services, which are largely and exclusively creditable for making him one of the most talented, veteran, and reliable astrologers in the whole world. The following are such main qualities and specialties of him and his services:
			"
description2="The cherished and ultimate ambition of our righteous and magnanimous guru ji astrologer Nikhil sharma is to make the best possible uses of his opulent gamut of knowledge and experience in these fields, for making lives of people of the world over better, happier, and optimally prosperous. During last two decades, he soothed and changed the troubled lives of thousands, and propelled and prospered businesses and careers of numerous. Today, his  astrology and vashikaran services  are rather popular and reliable in almost all major cities of India, and in numerous cities of Asia, Europe, Australia, North America, and South Africa. Over 10,000 of his satisfied beneficiaries have become dedicated and permanent clients of him for getting prompt and surefire solutions for their respective problems pertaining to various spheres of life."
      />
      <CapabilitiesSection
        expertiseItems={expertiseItems}
        lifeSpheresItems={lifeSpheresItems}
        contactNumber={contactNumber}
        email={email}
      />
      <DeclarationsSection/>
     
    </div>
  )
}

export default WhoIsAstrologerNikhilSharma;
