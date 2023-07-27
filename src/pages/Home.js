import React from 'react'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Slideshow from '../components/Slideshow'
import ReviewPage from '../components/Review'

const Home = () => {
  const isHome = true;
  const reviews = [
    { name: 'John Doe', date: '2023-06-12', image: 'https://via.placeholder.com/100', rating: 4, review: 'Great product!' },
    // ... more reviews
  ];
  return (
    <div>
       <Navbarr isHomePage={true} isHome={isHome} />
      <HeroSection />
      <Services />
      <Slideshow />
      <ReviewPage reviews={reviews}/>
      {/* <AboutUs /> */}
     
      <Footer isHome={isHome} ></Footer>
    </div>
  )
}

export default Home