import React from 'react'
import AstrologyBanner from '../component/core/AstrologyBannerRavindra.jsx'
import AstrologyCounseling from '../component/core/AstrologyCounselingRavindra.jsx'
import MarriageCounseling from '../component/core/MarriageCounselingRavindra.jsx'
import AstrologyServices from '../component/core/AstrologyServicesRavindra.jsx'
import AwardsSection from '../component/core/AwardsSection.jsx'
import ContactPage from '../component/common/ContactForm1.jsx'
import Navbar from '../Components/Navbar.jsx'
const Counseling = () => {
  return (
    <div>
      <Navbar />
      <AstrologyBanner 
        linkText="Pt. Nikhil Sharma World Famous Astrologer"
        linkHref="https://example.com/Nikhil-sharma"
        description="Astrology Counseling for your Life's Problems by Nikhil Sharma Ji"
      />
     <AstrologyCounseling
        title="Astrology Counseling for your Life's Problems by Nikhil Sharma Ji"
        description="For providing the wisest and best possible astrology counseling and suggestions for solving various problems of life, veteran and benevolent astrologer Nikhil Sharma is certainly one of the best astrologers in India and the whole world at present..."
      />
      <MarriageCounseling/>
      <AstrologyServices/>
      <AwardsSection title="AWARD AND ACHIEVEMENTS" />
      <ContactPage/>
    </div>
  )
}

export default Counseling
