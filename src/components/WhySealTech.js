import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "./WhySealTech.css"

const WhySealTech = () => {
  return (
    <Container className="why-sealtech-container" style={{  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.477)",
      background: "#f5f5f5"}}>

    <center>
      <h1 className='why-title'>About Us</h1>
      <h2 className='why-subtitle'>Our Story</h2>
      <Row>
        <Col xs={12} md={6} style={{background:'black', borderRadius:"40px", border: "10px solid #ec5d24"}}>
        <Image src='/images/sealtech.png' fluid/>
        </Col>
        <Col xs={12} md={6}>
        <p className='why-description'>Our founders John & Larry have over 18 years of experience in the Asphalt and Paving industry. As Bay Area natives, they have been able to grow Shield Seal to be one of the largest players in the region. Our main objective has and always will be to make sure your asphalt repair process is as effortless as possible. With over 275 satisfied customers, Shield Seal is without question the #1 Sealcoating brand in the East Bay. Your satisfaction truly is our top priority, and we’ll stop at nothing to make sure your asphalt looks magnificent for years to come. </p>
         </Col>
      </Row>
      <h2 className='why-subtitle'>Why SealTech?</h2></center>
      <p className='why-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante vel ipsum auctor dignissim sed nec erat. Fusce euismod nunc id convallis rhoncus. Aliquam dapibus ac mauris eu fringilla. Nullam vitae tellus quis mi cursus vehicula nec ut lectus. Sed iaculis malesuada diam ut vestibulum.
      </p>
      <center>
      <h4 className='why-equip'>The Equipment We Use</h4></center>
      <Row className="equipment-row">
        <Col md={4}>
          <Image className='why-img' style={{borderRadius:"40px", background:'black', border: "5px solid #ec5d24"}} src="/images/SwirlyProSurfacePressureWasher.png" alt="Image 1" fluid />
          <h5 className='equipment-name'>Swirly Pro Surface Pressure Washer</h5>
        </Col>
        <Col md={4}>
          <Image className='why-img' style={{borderRadius:"40px", background:'black', border: "5px solid #ec5d24"}} src="/images/ScagWindstormStandOnBlower.png" alt="Image 2" fluid />
          <h5 className='equipment-name'>Scag Windstorm Stand On Blower</h5>
        </Col>
        <Col md={4}>
          <Image className='why-img' style={{borderRadius:"40px", background:'black', border: "5px solid #ec5d24"}} src="/images/toro.png" alt="Image 3" fluid />
          <h5 className='equipment-name'>Toro Commercial Power Brush</h5>
        </Col>
        <Col md={4}>
          <Image className='why-img' style={{borderRadius:"40px", background:'black', border: "5px solid #ec5d24"}} src="/images/sealmastercrack.png" alt="Image 4" fluid />
          <h5 className='equipment-name'>Seal Master Crack Pro SM-125</h5>
        </Col>
        <Col md={4}>
          <Image className='why-img' style={{borderRadius:"40px", background:'black',  border: "5px solid #ec5d24"}} src="/images/sealmasterspray.png" alt="Image 5" fluid />
          <h5 className='equipment-name'>Seal Master Spray Master TR-575</h5>
        </Col>
        <Col md={4}>
          <Image className='why-img' style={{borderRadius:"40px", background:'black', border: "5px solid #ec5d24"}} src="/images/billygoat.png" alt="Image 6" fluid />
          <h5 className='equipment-name'>Billy Goat Grazor Crack Grinder</h5>
        </Col>
        <Col md={4}>
          <Image className='why-img' style={{borderRadius:"40px", background:'black', border: "5px solid #ec5d24"}} src="/images/graco.png" alt="Image 4" fluid />
          <h5 className='equipment-name'>Graco Electric Line Lazer 2000 with Line Driver</h5>
        </Col>
        <Col md={4}>
          <Image className='why-img' style={{borderRadius:"40px", background:'black',  border: "5px solid #ec5d24"}} src="/images/wacker.png" alt="Image 5" fluid />
          <h5 className='equipment-name'>Wacker Neusen RD12 Roller</h5>
        </Col>
        <Col md={4}>
          <Image className='why-img' style={{borderRadius:"40px", background:'black',  border: "5px solid #ec5d24"}} src="/images/KM.png" alt="Image 6" fluid />
          <h5 className='equipment-name'>KM 4-48 Infrared Heater</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default WhySealTech;
