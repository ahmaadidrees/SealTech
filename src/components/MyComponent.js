import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import "./LinePainting.css"

const LinePainting = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedImage, setSelectedImage] = useState('/images/crackfilling.jpeg'); // Default selected image

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
          <h1 style={{marginTop:"100px", marginBottom:'50px'}} className="text-center sealcoat-title">Line Painting</h1>
        </Col>
      </Row>
      <Row style={{margin:'100px'}}>
        <Col xs={12} md={7} >
          <Image style={{borderRadius:'40px',border: "5px solid #ec5d24", marginBottom:"20px"}} src={selectedImage} alt="Image" fluid />
          
        <p className="linepage-text">At Shield Seal we provide best in class line painting services to every kind of property owner, whether you're a small daycare or a large office park your satisfaction is our #1 priority.Whether it's a damaged lot or a newly constructed site, our team of experienced painters will provide a customized solution to meet your needs.</p>
        <p className="linepage-text">Our line painters are experienced professionals who take great pride in their work and strive to do it right the first time around! We are equipped with all the necessary equipment – including high quality paints and stencils – to cater to all your line painting needs.</p>
        <h2 className="page-subtitle">5 Reasons Why Freshly Marked Pavement Lines Matter</h2>
        <li>Safety – No one wants an accident occurring on their property because someone couldn’t see the lane dividers.</li>
        <li>Cleanliness – Freshly painted lines will keep your parking lot looking clean and orderly. This makes a great impression on customers and helps improve business!</li>
        <li>ADA Compliance –</li>
        <li>Designated Parking –</li>
        <li>Traffic Flow – Having clear markings for lanes will reduce traffic accidents by ensuring drivers don’t use the wrong traffic lanes.</li>
        <p className="linepage-text">The list doesn’t end here. If you want to benefit from line painting and enhance the look of your property, connect with our experts today!</p>
        
        </Col>
        <Col xs={12} md={5}>
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
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <h2 style={{marginTop:"50px", marginBottom:'50px'}} className="text-center sealcoat-subtitle">Contact Us Today</h2>
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

                <Button style={{borderRadius:'40px', background:"#ec5d24", borderColor:"#ec5d24"}} className='contact-btn'  type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
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

export default LinePainting;
