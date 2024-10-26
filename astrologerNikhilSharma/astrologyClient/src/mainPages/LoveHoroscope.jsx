import React from 'react'
import Navbar from '../Components/Navbar'
import SimilarPageWithSidebar from "../Components/SimilarPageWithSidebar"
import LoveHoroscopeContent from '../Data/content/LoveHoroscopeContent.jsx'

const LoveHoroscope = () => {
  return (
    <>
    <SimilarPageWithSidebar Content={LoveHoroscopeContent} />
    </>
  )
}

export default LoveHoroscope