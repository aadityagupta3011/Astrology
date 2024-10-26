import React from "react";
import Navbar from "../Components/Navbar";
import SimilarPage from "../Components/SimilarPage";
import LoveMarriageSpecialistContent from "../Data/content/LoveMarriageSpecialistContent.jsx";

const LoveMarriageSpecialist = () => {
  return (
    <>
      {/* Access the first element in the array */}
      <SimilarPage Content={LoveMarriageSpecialistContent} Title={"/Love-Marriage-Specialist/"} />
    </>
  );
};

export default LoveMarriageSpecialist;
