import React from "react";
import Navbar from "../Components/Navbar";
import SimilarPage from "../Components/SimilarPage.jsx";
import MaritalProblemSolutionContent from "../Data/content/MaritalProblemSolutionContent.jsx"


const MaritalProblemSolution = () => {
  return (
    <>
      <SimilarPage Content={MaritalProblemSolutionContent} Title={"/Marital-Problem-Solution/"} />
    </>
  );
};

export default MaritalProblemSolution;
