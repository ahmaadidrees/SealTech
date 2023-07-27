import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import {  IoClose, IoMenu } from 'react-icons/io5';


function Navbarr({isHomePage, isHome}) {
  const [scrolled, setScrolled] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleNavToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setScrolled(false);
      } else if (!scrolled) {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleNavClose = () => {
    setIsNavExpanded(false);
  }


  const bg = isHomePage || isNavExpanded ? 'black' : (scrolled ? 'black' : 'transparent');
 
 
  return (
    <Navbar
      sticky='top'
      bg={bg}
      expand='lg'
      expanded={isNavExpanded}
    onToggle={handleNavToggle}
      variant={'dark'}
      style={{paddingTop:0, marginTop: -32}}
      
    >
     <Container style={{ minHeight: '120px', height: 'auto', display: 'flex !important', justifyContent: 'space-between !important'}}>
        <Link to='/' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>
          
        <img
          // style={{ height: '250px', width: '250px', marginLeft:"0 !important", marginTop: -40, marginBottom: -40 }}
          src='/images/sealtech.png'
          className='d-inline-block align-top logo'
          alt='fuck'
        /></Link>
        {/* <Navbar.Brand className='nav-title' style={{ color: 'white',fontWeight: 'bold'}} as = {Link} to='/' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>
          Shield Seal Pavement Co.
        </Navbar.Brand> */}
        <Navbar.Toggle
      style={{ border: 'none',outline: 'none', boxShadow: 'none !important' }}
  aria-controls="basic-navbar-nav"
  onClick={handleNavToggle}
>
{isNavExpanded ? (
    <IoClose size={30} /> // Set the desired size for the close icon
  ) : (
    <IoMenu size={30} /> // Set the desired size for the menu icon
  )}
</Navbar.Toggle>

        <Navbar.Collapse className='toDaRight' id='basic-navbar-nav' expanded ={isNavExpanded} >
          <Nav className='ms-auto '  >
           {!isHome && <Nav.Link className='nav-link' style={{ color: 'white' }} as = {Link} to='/' onClick={()=>{ handleNavClose(); window.scrollTo({ top: 0, behavior: 'smooth' });}}>
              Home
            </Nav.Link>}
           
            <Nav.Link className='nav-link' style={{ color: 'white' }} as = {Link} to='/our-story' onClick={()=>{ handleNavClose(); window.scrollTo({ top: 0, behavior: 'smooth' });}}>
              About Us
            </Nav.Link>
             <NavDropdown
              className='nav-dropdown'
              title={<span className='my-nav-dropdown'>Services</span>}
              id='nav-dropdown'
            
            >
              <NavDropdown.Item as = {Link} to = '/sealcoat' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>Sealcoating</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to = '/crack' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>Crack Filling</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to = '/line'onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>Line Painting</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link className='nav-link' style={{ color: 'white' }} as={Link} to='/' onClick={() => { setTimeout(() => { handleNavClose(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' });}, 200);  }}>
              About Us
            </Nav.Link> */}
            {/* <NavDropdown
              className='nav-dropdown'
              title={<span className='my-nav-dropdown'>About Us</span>}
              id='nav-dropdown'
            >
              <NavDropdown.Item as = {Link} to = '/our-story' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>Our Story</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to = '/why-sealtech' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>Why SealTech?</NavDropdown.Item>
            </NavDropdown> */}

            
            <Nav.Link as={Link} to = '/blog' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} style={{ color: 'white' }}>
              Blog
            </Nav.Link>
            {/* <Nav.Link as={Link} to = '/contact' onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} style={{ color: 'white' }}>
              Why SealTech
            </Nav.Link> */}
           <Nav.Link as = {Link} to = '/gallery'onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} style={{ color: 'white' }} >
              Gallery
            </Nav.Link>
            <Nav.Link as = {Link} to = '/contact'onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} style={{ color: 'white' }} >
             <FaPhone style={{height:'30px', width:'30px'}} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
