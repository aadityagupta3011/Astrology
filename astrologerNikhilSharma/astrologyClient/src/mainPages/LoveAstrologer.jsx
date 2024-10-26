import React from "react";
import Navbar from "../Components/Navbar";
import SimilarPageWithSidebar from "../Components/SimilarPageWithSidebar";
import LoveAstrologerContent from "../Data/content/LoveAstrologerContent";

const LoveAstrologer = () => {
  return (
    <>
      <SimilarPageWithSidebar Content = {LoveAstrologerContent} />
    </>
  );
};

export default LoveAstrologer;
