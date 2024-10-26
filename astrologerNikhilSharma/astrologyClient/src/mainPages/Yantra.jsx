import React from "react";
import Navbar from "../Components/Navbar";
import Section from "../component/core/Section";
import ProductPage from "../component/core/ProductCard";
import AvailabilityMessage from "../component/core/AvailabilityMessage";
import ContactPage from "../component/common/ContactForm1";

const Yantra = () => {
  const leftText = `
  Our renowned Indian astrologer and vashikaran expert, celebrated globally, has created two extraordinary and highly effective yantras that showcase unparalleled prowess in astrology and vashikaran. These yantras are now recognized as among the most potent in India and internationally, offering unparalleled capabilities. Individuals can utilize these powerful tools independently or in conjunction with our expert's reliable and risk-free astrology and vashikaran services.
`;

  const rightText = `
 Individuals seeking or interested in exploring the benefits of astrology and vashikaran can easily access these products online, unlocking a wealth of advantages and blessings. To date, India and around the globe have taken advantage of the online vashikaran yantra services offered by renowned astrologer Nikhil Sharma Ji, based in Chandigarh. The unique features and properties of each of these extraordinary and hard-to-find yantras are outlined below.
`;
  return (
    <div>
      <Navbar />
      <Section leftText={leftText} rightText={rightText} />
      <ProductPage />
      <Section leftText={leftText} />
      <AvailabilityMessage />
      <ContactPage />
    </div>
  );
};

export default Yantra;
