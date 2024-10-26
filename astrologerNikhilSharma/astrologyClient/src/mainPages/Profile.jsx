import React from "react";
import AstrologyBanner from "../component/core/AstrologyBannerRavindra.jsx";
import AstrologyCounseling from "../component/core/AstrologyCounselingRavindra.jsx";
import Services from "../component/core/ServicesRavindra.jsx";
import AwardsAndAchievements from "../component/core/AwardsAndAchievementsRavindra.jsx";
import TestimonialContact from "../component/core/TestimonialContact.jsx";
import Navbar from "../Components/Navbar.jsx";
const Profile = () => {
  return (
    <div>
      <Navbar />
      <AstrologyBanner
        linkText="Pt. Nikhil Sharma World Famous Astrologer"
        description="Profile - Astrologer Nikhil Sharma ji"
      />
      <AstrologyCounseling
        title="Profile - Astrologer Nikhil Sharma Ji"
        description="Highly erudite, well-seasoned, and veteran astrologer Nikhil Sharma is regarded as one of the best and most credible astrologers in the whole world at present. This one of the top and leading astrologers and vashikaran experts of India holds the great credit for having helped, served, and prospered the troubled and suffering people of the world over for over two decades.

The head office of his prestigious service firm is well-established in Chandigarh (Punjab), while numerous branch and liaison offices of this firm are located in major cities across India and the world. This webpage offers very informative and profitable information about magnificent Astrologer Nikhil Sharma Ji, his qualities and specialties, his globally admired services, achievements, awards, reviews from his satisfied clients, and contact details.

The father of our grand guru ji, astrologer Nikhil Sharma, has also been an august astrologer and vashikaran specialist of international repute. After getting broad and refined knowledge in astrology and vashikaran from his virtuous father, Nikhil Sharma studied extensively to build a dedicated and highly creative career in these fields.

His astrology, healing, and vashikaran services are described briefly here, including the recognitions and awards won till date by him for his outstanding and generous services in these fields."
        description1="The father of our grand guru ji astrologer Nikhil Sharma, has also been an august astrologer and vashikaran specialist of international repute. After getting broad and refined knowledge in astrology and vashikaran from his virtuous father, Nikhil sharma studied extensively to build a dedicated and highly creative career in these fields. Apart from these benevolent sciences, he is now also well-versed in the disciplines of Vastu Shastra, Psychic Reading, Natural Healing and Therapies, Numerology, etc. Here, only his  are described briefly, including the recognitions and awards won till date by him for outstanding and generous services in these fields."
        description2="The cherished and ultimate ambition of our righteous and magnanimous guru ji astrologer Nikhil sharma is to make the best possible uses of his opulent gamut of knowledge and experience in these fields, for making lives of people of the world over better, happier, and optimally prosperous. During last two decades, he soothed and changed the troubled lives of thousands, and propelled and prospered businesses and careers of numerous. Today, his  astrology and vashikaran services  are rather popular and reliable in almost all major cities of India, and in numerous cities of Asia, Europe, Australia, North America, and South Africa. Over 10,000 of his satisfied beneficiaries have become dedicated and permanent clients of him for getting prompt and surefire solutions for their respective problems pertaining to various spheres of life."
      />

      <AwardsAndAchievements />
      <TestimonialContact />
    </div>
  );
};

export default Profile;
