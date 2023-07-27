import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import QuoteModal from './QuoteModal';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const images = [
    '/Images/sealcoat.jpeg',
    '/Images/LinePainting.jpeg',
    '/Images/crackfilling.jpeg'
  ];

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div id="home" className="hero-section">
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentImageIndex ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="hero-content">
          <h1 className="hero-title">COVER YOUR ASPHALT</h1>
          <h2 className="hero-subtitle">Bay Area's #1 Pavement Maintenance Company</h2>
          <button className="hero-button" onClick={handleOpenModal}>
            Get A Quote <FaArrowRight />
          </button>
        </div>
      </div>

      <QuoteModal showModal={showModal} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default HeroSection;
