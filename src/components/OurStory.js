import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './OurStory.css';

function OurStory() {
  return (
    <div className="about-us-container">
      <center>
        <h1 className="about-us-title">About Us</h1>
        <h3 className="about-us-subtitle">Our Story</h3>
      </center>
      <Row className="about-us-content">
        <Col xs={12} md={6}>
          <div  className="image-description-container">
            <Image
              src="/images/sealtech.png"
              alt="About Us"
              className="about-us-image"
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="image-description-container">
            <p className="about-us-description">
              Our founders John & Larry have over 18 years...
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default OurStory;
