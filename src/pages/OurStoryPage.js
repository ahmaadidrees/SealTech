import React from 'react'
import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import OurStory from '../components/OurStory'
import WhySealTech from '../components/WhySealTech'

const OurStoryPage = () => {
  return (
    <div>
        <Navbarr isHomePage={true} />
        {/* <OurStory /> */}
        <WhySealTech/> 
        <Footer />

    </div>
  )
}

export default OurStoryPage