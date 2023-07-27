import React from 'react'
import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import BlogList from '../components/Blog'
import Article from '../components/Article'

const OurStoryPage = () => {
  return (
    <div>
        <Navbarr isHomePage={true} />
       <Article />
        <Footer />

    </div>
  )
}

export default OurStoryPage