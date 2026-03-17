import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import honeymoon from '../components/honeymoon.png';
import worship from '../components/worship.png';
import Adventure from '../components/Adventure.png';
import '../components/App.css';

function Slider() {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)',
    zIndex: 1
  };

  const captionStyle = {
    zIndex: 2,
    bottom: '20%',
    textAlign: 'center'
  };

  return (
    <Carousel data-bs-theme="light" fade style={{ height: '100vh', overflow: 'hidden', marginTop: '-80px' }}>
      <Carousel.Item style={{ height: '100vh' }}>
        <div style={overlayStyle}></div>
        <img
          className="d-block w-100"
          src={worship}
          alt="First slide"
          style={{ height: '100%', objectFit: 'cover' }}
        />
        <Carousel.Caption style={captionStyle} className="fade-in-up">
          <h1 style={{ color: 'white', fontSize: '4rem', fontWeight: 800, textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>Soulful Journeys</h1>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}>Find peace and blessings on a soulful Worship Journey.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: '100vh' }}>
        <div style={overlayStyle}></div>
        <img
          className="d-block w-100"
          src={honeymoon}
          alt="Second slide"
          style={{ height: '100%', objectFit: 'cover' }}
        />
        <Carousel.Caption style={captionStyle} className="fade-in-up">
          <h1 style={{ color: 'white', fontSize: '4rem', fontWeight: 800, textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>Romantic Escapes</h1>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}>Celebrate love with a Romantic Vacation — perfect moments, just for two.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: '100vh' }}>
        <div style={overlayStyle}></div>
        <img
          className="d-block w-100"
          src={Adventure}
          alt="Third slide"
          style={{ height: '100%', objectFit: 'cover' }}
        />
        <Carousel.Caption style={captionStyle} className="fade-in-up">
          <h1 style={{ color: 'white', fontSize: '4rem', fontWeight: 800, textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>Thrilling Adventures</h1>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}>
            Thrilling adventures that make every journey unforgettable.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;