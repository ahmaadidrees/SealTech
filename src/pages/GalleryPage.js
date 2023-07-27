import React from 'react'
import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'

const OurStoryPage = () => {
  return (
    <div>
        <Navbarr isHomePage={true} />
        <Gallery/>
        <Footer />

    </div>
  )
}

export default OurStoryPage