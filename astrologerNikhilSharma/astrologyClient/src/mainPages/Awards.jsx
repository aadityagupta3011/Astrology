import React from 'react'
import MainSection from '../component/MainSection'
import AstrologyBanner from '../component/core/AstrologyBannerRavindra.jsx'
import AwardsPagesRavindra from '../component/core/AwardsPagesRavindra.jsx'
import Navbar from "../Components/Navbar.jsx"
const Awards = () => {
  return (
    <div>
      <Navbar />
      <MainSection/>
      <AstrologyBanner 
        linkText="Pt. Nikhil Sharma World Famous Astrologer"
        description="Blogs"
      />
      <AwardsPagesRavindra/>
    </div>
  )
}

export default Awards