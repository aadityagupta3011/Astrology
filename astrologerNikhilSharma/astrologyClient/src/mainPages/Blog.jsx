import React from 'react'
import AstrologyBanner from '../component/core/AstrologyBannerRavindra.jsx'
import YtQuery from '../component/common/YtQueryRavindra.jsx'
import LoveRelationshipAdvice from '../component/core/LoveRelationshipAdviceRavindra.jsx'
import Navbar from '../Components/Navbar.jsx'

const Blogs = () => {
  return (
    <div>

      <Navbar />
      <AstrologyBanner 
        linkText="Pt. Nikhil Sharma World Famous Astrologer"
        description="Blogs"
      />
      <YtQuery/>
      <LoveRelationshipAdvice/>
    </div>
  )
}

export default Blogs
