import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/Images/tool6.jpeg','/Images/tool5.jpeg','/Images/tool3.jpeg','/Images/tool2.jpeg','/Images/tool1.jpeg','/Images/sealcoat.jpeg', '/Images/LinePainting.jpeg', '/Images/crackfilling.jpeg'];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div id="home" className="slide-section">
      <div className="slide-container">
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentImageIndex ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="slide-content">
          <h1 className="slide-title">Get The Most Out Of Your Asphalt Parking Lot – 100% Satisfaction!</h1>
          <h2 className="slide-subtitle">We Provide A Full Range Of Asphalt Paving, Repair, & Maintenance Services</h2>
          <Link to = "/contact#top" >
          <button onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} className="free-quote">Contact Us Today <FaArrowRight/></button></Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
