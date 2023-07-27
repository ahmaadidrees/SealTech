import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import "./SealcoatingPage.css"

const Sealcoating = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedImage, setSelectedImage] = useState('/images/sealcoat.jpeg'); // Default selected image

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the code to submit the form data to your backend or API
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Notes:', notes);
    // After submitting the form data, you can clear the state variables
    setName('');
    setPhoneNumber('');
    setEmail('');
    setAddress('');
    setNotes('');
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <Container className="sealcoat-container">
      <Row>
        <Col>
          <h1 style={{marginTop:"100px", marginBottom:'50px'}} className="text-center sealcoat-title">Sealcoating</h1>
        </Col>
      </Row>
      <Row className='sealcontent' style={{marginBottom: "100px"}}>
        <Col xs={12} md={7}>
          <Image style={{borderRadius:'40px',border: "5px solid #ec5d24", marginBottom:"20px"}} src={selectedImage} alt="Image" fluid />
          <p className="sealpage-text">Sealcoating is the application of a polymer based coating to asphalt pavement, to help shield it from the damaging effects of rain, high-weight vehicles, and other harmful elements such as oil and gas spills. This coating also safeguards the pavement against future cracks and potholes, preventing costly repairs. Research shows if asphalt is sealcoated every 2-3 years, it is 90% less likely to crack than an unsealed surface.</p>
          <p className="sealpage-text">We pride ourselves on using non-toxic water-based sealants to ensure the safest and longest-lasting product on the market. Using a water-based sealant also allows us to add products such as Fass-Dri to expedite the drying process and diminish downtown. Our polymer is the same product used in airport runways to ensure your pavement can endure anything you throw at it while maintaining a jet black color.</p>
          <p className="sealpage-text">At Shield Seal, we provide sealcoating solutions for all types of asphalt, from residential driveways to high-traffic commercial parking lots. Our skilled technicians use the most durable sealers on the market, and cutting-edge equipment to ensure your asphalt stays in excellent condition for years to come!</p>     
        </Col>
        <Col xs={12} md={5}>
          
          <Row>
            <Col>
            <Form style={{ background: '#e5e5e5', borderRadius: '20px', padding: '10px', border: '10px solid #ec5d24', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }} onSubmit={handleSubmit}>

                <h2 style={{ marginBottom:'50px'}} className="text-center sealcoat-subtitle">Contact Us Today</h2>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    style={{borderRadius:"40px"}}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhoneNumber">
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    required
                    style={{borderRadius:"40px"}}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    style={{borderRadius:"40px"}}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAddress">
                  <Form.Control
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    style={{borderRadius:"40px"}}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNotes">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter any additional notes"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    style={{borderRadius:"20px"}}
                  />
                </Form.Group>

                <Button style={{borderRadius:'40px', background:"#ec5d24", borderColor:"#ec5d24", marginBottom:50}} className='contact-btn'  type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
            <h2 style={{ marginBottom:20, marginTop:50}} className="text-center sealcoat-subtitle">Quick Links</h2>
            <Row>
            <Col>
              <Button style={{width:"100%", marginBottom: "10px",borderRadius:'40px', background:"#ec5d24", borderColor:"#ec5d24"}} >Sealcoating</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button style={{width:"100%", marginBottom: "10px",borderRadius:'40px', background:"#ec5d24", borderColor:"#ec5d24"}} >Crack Filling</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button style={{width:"100%", marginBottom: "10px",borderRadius:'40px', background:"#ec5d24", borderColor:"#ec5d24"}} >Line Painting</Button>
            </Col>
          </Row>
              <Row style={{marginTop:"20px", height: "100%"}}>
                <Col xs={4}>
                  <Image
                    style={{borderRadius:"10px", cursor: 'pointer', border: selectedImage ==="/images/sealcoat.jpeg" && "3px solid #ec5d24" }}
                    src="/images/sealcoat.jpeg"
                    alt="Image 1"
                    fluid
                    onClick={() => handleImageClick('/images/sealcoat.jpeg')}
                  />
                </Col>
                <Col xs={4}>
                  <Image
                    style={{borderRadius:"10px", cursor: 'pointer',border: selectedImage ==="/images/crackfilling.jpeg" && "3px solid #ec5d24"}}
                    src="/images/crackfilling.jpeg"
                    alt="Image 2"
                    fluid
                    onClick={() => handleImageClick('/images/crackfilling.jpeg')}
                  />
                </Col>
                <Col xs={4}>
                  <Image
                    style={{borderRadius:"10px", cursor: 'pointer',border: selectedImage ==="/images/LinePainting.jpeg" && "3px solid #ec5d24"}}
                    src="/images/LinePainting.jpeg"
                    alt="Image 3"
                    fluid
                    onClick={() => handleImageClick('/images/LinePainting.jpeg')}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Sealcoating;
