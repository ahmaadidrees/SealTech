import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaArrowRight } from 'react-icons/fa';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer({isHome}) {
  return (
    <footer className='foot' style={{background: 'black', color: 'white', paddingBottom: '0px', overflowX:'hidden', overflow:'hidden', paddingTop: '30px', marginTop: isHome && -280}}>
       <div style={{background:"#ec5d24", position:"relative", top:-30,right:1200, width: "10000%", height:"5px", overflowX:'hidden'}}></div>
      <Container className='footer-container'>
        <Row>
          <Col sm={12} md={3} className="mb-4" style={{textAlign:'center'}}>
            <img src="/images/sealtech.png" alt="Logo" style={{height: '250px', marginTop:-55}}/>
            <div className="mt-3">
              <Link to = '/contact'> 
              <button onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} href="#" className="footer-btn">Contact Us Today <FaArrowRight/></button></Link>
            </div>
          </Col>
          <Col sm={12} md={3} className="mb-4">
            <h4 style={{textAlign:'center'}} className="text-yellow">Quick Links</h4>
            <ul className="list-unstyled mt-3 footer-links" style={{ textAlign:'center', textDecoration:'none !important', color:'white'}}>
            <Link onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} style={{color:'white',textDecoration:'none'}} to='/'> <li className='text-orange'>Home</li></Link>
              <Link onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} style={{color:'white',textDecoration:'none'}} to = '/our-story'><li className='text-orange'>Our Story</li></Link>
              <Link onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} style={{color:'white',textDecoration:'none'}} to = '/why-sealtech'><li className='text-orange'>Why SealTech</li></Link>
              <Link onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} style={{color:'white',textDecoration:'none'}} to = '/sealcoat'><li className='text-orange'>Our Services</li></Link>
              <Link onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} style={{color:'white',textDecoration:'none'}} to = '/contact'><li className='text-orange'>Contact</li></Link>
              <Link onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} style={{color:'white',textDecoration:'none'}} to = '/'><li className='text-orange'>Gallery</li></Link>
            </ul>
          </Col>
          <Col sm={12} md={3} className="mb-4">
            <h4 className="text-yellow text-center">Hours of Operation</h4>
            <ul className="list-unstyled mt-3 hours " style={{whiteSpace:'nowrap',textAlign:'center', color:"white" }}>
              <li  >Mon: 7:00 AM - 8:00 PM</li>
              <li >Tue: 7:00 AM - 8:00 PM</li>
              <li >Wed: 7:00 AM - 8:00 PM</li>
              <li >Thu: 7:00 AM - 8:00 PM</li>
              <li >Fri: 7:00 AM - 8:00 PM</li>
              <li >Sat: 7:00 AM - 8:00 PM</li>
              <li >Sun: 7:00 AM - 8:00 PM</li>
            </ul>
          </Col>
          <Col sm={12} md={3} className="mb-4">
            <h4 style={{textAlign:'center'}} className="text-yellow">Information</h4>
            <ul className="list-unstyled mt-3 footer-links" style={{ textAlign:'center'}}>
              <a className='text-orange' style={{color:'white',textDecoration:'none'}} href="tel:925-984-0822"><li className='text-orange'> 925-984-0822</li></a>
               <a className='text-orange' style={{color:'white',textDecoration:'none'}} href="mailto:sealtechpavement@gmail.com"><li className='text-orange'>sealtechpavement@gmail.com</li></a>
            </ul>
            <h4 style={{textAlign:'center'}} className="text-yellow mt-4">Follow Us On</h4>
            <ul className="list-unstyled d-flex mt-3  justify-content-center" style={{ textAlign:'center'}} >
              <a className='text-orange' href="#"><li className="me-2"><FaInstagram size={30}  /></li></a>
              <a className='text-orange' href="#"><li className="me-2"><FaFacebook size={30}  /></li></a>
              <a className='text-orange' href="#"><li className="me-2"><FaLinkedin size={30}  /></li></a>
              <a className='text-orange' href="#"><li className="me-2"><FaYoutube size={30}  /></li></a>
            </ul>
          </Col>
        </Row>
        
      </Container>
      <div style={{background:"#ec5d24", position:"relative", bottom:0,right:1200, width: "10000%", height:"5px", overflowX:'hidden'}}></div>
    </footer>
  );
}

export default Footer;
