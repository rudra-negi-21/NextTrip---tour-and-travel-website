import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Mynavbar() {
  const [scrolled, setScrolled] = useState(false);
  const phoneNumber = "919354551145"; 
  const helpMessage = "Hello, I need help"; 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHelpClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(helpMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className={scrolled ? 'glass-panel' : 'bg-transparent'}
      style={{ padding: scrolled ? '10px 0' : '20px 0', transition: 'all 0.3s ease', zIndex: 1000 }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ fontSize: '28px', color: scrolled ? 'var(--dark)' : '#fff', fontWeight: 800, textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)', transition: 'color 0.3s ease' }}>
          Next<span className="text-primary-brand">Trip</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: scrolled ? 'transparent' : 'rgba(255,255,255,0.8)' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
            <Nav.Link as={Link} to="/" style={{ color: scrolled ? 'var(--dark)' : '#fff', textShadow: scrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.4)', transition: 'color 0.3s ease' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/Cards" style={{ color: scrolled ? 'var(--dark)' : '#fff', textShadow: scrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.4)', transition: 'color 0.3s ease' }}>Packages</Nav.Link>
            <Nav.Link as={Link} to="/Search" style={{ color: scrolled ? 'var(--dark)' : '#fff', textShadow: scrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.4)', transition: 'color 0.3s ease' }}>Book-ride</Nav.Link>
            <Nav.Link as={Link} to="/Know" style={{ color: scrolled ? 'var(--dark)' : '#fff', textShadow: scrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.4)', transition: 'color 0.3s ease' }}>About</Nav.Link>
          </Nav>
          <button
            type="button"
            className="btn-primary-custom"
            onClick={handleHelpClick}
          >
            Help & Support
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;
