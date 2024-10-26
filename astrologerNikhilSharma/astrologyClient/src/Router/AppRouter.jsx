import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../mainPages/Home.jsx";
import AboutUs from "../mainPages/AboutUs.jsx";
import AboutAnkitJi from "../mainPages/AboutAnkitJi.jsx";
import WhoIsAstrologerAnkitSharma from "../mainPages/WhoIsAstrologerAnkitSharma.jsx";
import WorldwideAstroServices from "../mainPages/WorldwideAstroServices.jsx";
import AstrologySpecialist from "../mainPages/AstrologySpecialist.jsx";
import BestAstrologer from "../mainPages/BestAstrologer.jsx";
import LoveAstrologer from "../mainPages/LoveAstrologer.jsx";
import VashikaranSpecialist from "../mainPages/VashikaranSpecialist.jsx";
import VashikaranMantra from "../mainPages/VashikaranMantra.jsx";
import LoveVashikaranSpecialist from "../mainPages/LoveVashikaranSpecialist.jsx";
import LoveMarriageSpecialist from "../mainPages/LoveMarriageSpecialist.jsx";
import MaritalProblemSolution from "../mainPages/MaritalProblemSolution.jsx";
import LoveHoroscope from "../mainPages/LoveHoroscope.jsx";
import Awards from "../mainPages/Awards.jsx";
import Blog from "../mainPages/Blog.jsx";
import Contact from "../mainPages/Contact.jsx";
import Yantra from "../mainPages/Yantra.jsx"
import LoveProblemSpecialist from "../mainPages/LoveProblemSpecialist.jsx"
import AllInOneLinkPage from "../mainPages/AllinOneLinkPage.jsx";
import Profile from "../mainPages/Profile.jsx";
import Counseling from "../mainPages/Counseling.jsx"
import Testimonials from "../mainPages/testimonials.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/About-Ankit-Ji" element={<AboutAnkitJi />} />
        <Route
          path="/Who-is-Astrologer-Nikhil-Sharma"
          element={<WhoIsAstrologerAnkitSharma />}
        />
        <Route
          path="/Worldwide-Astro-Services"
          element={<WorldwideAstroServices />}
        />
        <Route path="/Astrology-Specialist" element={<AstrologySpecialist />} />
        <Route path="/Best-Astrologer" element={<BestAstrologer />} />
        <Route path="/Love-Astrologer" element={<LoveAstrologer />} />
        <Route
          path="/Vashikaran-Specialist"
          element={<VashikaranSpecialist />}
        />
        <Route path="/Vashikaran-Mantra" element={<VashikaranMantra />} />
        <Route
          path="/Love-Vashikaran-Specialist"
          element={<LoveVashikaranSpecialist />}
        />
        <Route path="/Love-Problem-Specialist"  element={<LoveProblemSpecialist/> } />
        <Route
          path="/Love-Marriage-Specialist"
          element={<LoveMarriageSpecialist />}
        />
        <Route
          path="/Marital-Problem-Solution"
          element={<MaritalProblemSolution />}
        />
        <Route path="/Love-Horoscope" element={<LoveHoroscope />} />
        <Route path="/Awards" element={<Awards />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Yantra" element={<Yantra/>} />
        <Route path="/Vashikaran-Specialist/:slug" element={<AllInOneLinkPage />} />
        <Route path="/Vashikaran-Mantra/:slug" element={<AllInOneLinkPage />} />
        <Route path="/Love-Vashikaran-Specialist/:slug" element={<AllInOneLinkPage />} />
        <Route path="/Love-Problem-Specialist/:slug" element={<AllInOneLinkPage />} />
        <Route path="/Love-Marriage-Specialist/:slug" element={<AllInOneLinkPage />} />
        <Route path="/Marital-Problem-Solution/:slug" element={<AllInOneLinkPage />} />
        <Route path="/Best-Astrologer/:slug" element={<AllInOneLinkPage />} />
        <Route path="/Profile" element={ <Profile/> } />
        <Route path="/Counseling" element={ <Counseling/> } />
        <Route path="/testimonials" element={ <Testimonials/> } />
      </Routes>
    </Router>
  );
};

export default AppRouter;
