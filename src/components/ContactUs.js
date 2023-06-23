import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './ContactUs.css'
import {  FaEnvelope, FaMapMarkerAlt, FaPhone,  } from 'react-icons/fa';
import GoogleMap from './GoogleMap';

function ContactUs() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  

  const googleMapsApiKey ="AIzaSyCRA4E6bRpvodbmQrr72rJg645_YVgKY4k";
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
  const styles = {
    container: {
      background: '#f5f5f5',
      padding: '10px',
      marginRight: '10px',
      marginLeft: '10px',
    },
    colContainer: {
      borderRadius: '40px',
    },
  };
  return (
    <Container className='contact-container' style = {{height: '1000px', position:'relative', top:"100px", paddingLeft: "100px", paddingRight: "100px"}}>
   <center>
      <h1 className='contact-title'>Contact Us Today</h1>
      <Row>
        <Col>
          <div style={{ ...styles.container, ...styles.colContainer }}>
            <h3>Location</h3>
            <div className="iconButt" > <FaMapMarkerAlt className='contact-icon' style={{margin:10, transition:"color 0.4s ease-in-out"}} size={50} /></div>
            <div>501 Danville Blvd, Danville, CA 94526</div>
          </div>
        </Col>
        <Col>
          <div style={{ ...styles.container, ...styles.colContainer }}>
            <h3>
             Email
            </h3>
            <div className="iconButt" >
            <a className='contact-link' href="mailto:sealtechpavement@gmail.com"> <FaEnvelope className='contact-icon' style={{margin:10, transition:"color 0.4s ease-in-out"}} size={50} /></a>
            </div>
            <div>
             sealtechpavement@gmail.com
            </div>
          </div>
        </Col> <Col>
          <div style={{ ...styles.container, ...styles.colContainer }}>
            <h3>Phone </h3>
            
            <div  className="iconButt" ><a className='contact-link' href="tel:925-984-0822"><FaPhone className='contact-icon' style={{margin:10, transition:"color 0.4s ease-in-out"}} size={50} /></a></div>
            <div>925-984-0822</div>
          </div>
        </Col>
      </Row>
      
    </center>



      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>Phone Number*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNotes">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter any additional notes"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </Form.Group>

        <Button className='contact-btn'  type="submit">
          Submit
        </Button>
      </Form>
      
    </Container>
  );
}

export default ContactUs;
