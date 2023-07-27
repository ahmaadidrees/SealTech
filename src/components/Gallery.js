import React, { useState } from 'react';
import './Gallery.css'; // This will hold our custom styles
import { Button, ButtonGroup, Card, Col, Row } from 'react-bootstrap';

const Gallery = () => {
  const [filter, setFilter] = useState('video');
  const data = Array(12).fill("/images/sealtech.png");

  return (
    <div className="gallery">
      <div className="gallery-header" style={{ backgroundImage: 'url(/images/sealtech.png)',backgroundColor:'black' }}>
        <h1>Gallery Title</h1>
      </div>
      <center>
      <ButtonGroup aria-label="Gallery filter">
        <Button onClick={() => setFilter('video')} variant={filter === 'video' ? "primary" : "light"}>Video</Button>
        <Button onClick={() => setFilter('commercial')} variant={filter === 'commercial' ? "primary" : "light"}>Commercial Photos</Button>
        <Button onClick={() => setFilter('residential')} variant={filter === 'residential' ? "primary" : "light"}>Residential Photos</Button>
      </ButtonGroup></center>
      <div className="gallery-grid">
        <Row>
          {data.map((item, index) => (
            <Col key={index} xs={6} sm={4} md={3} className="gallery-item"> {/* Adjust the number of cols based on screen size */}
              <Card>
                <Card.Img style={{background:'black', marginBottom:20, border:"5px solid #ec5d24"}} variant="top" src={item} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Gallery;
