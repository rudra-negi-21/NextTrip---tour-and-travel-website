import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--dark)', color: '#fff', padding: '60px 0 30px' }}>
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-md-6">
            <h3 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '2rem', marginBottom: '15px' }}>Next<span className="text-primary-brand">Trip</span></h3>
            <p style={{ color: '#a0aec0', fontSize: '1rem', marginBottom: '25px', maxWidth: '400px', margin: '0 auto 25px' }}>
              Your ultimate travel partner for memorable and hassle-free adventures across the finest destinations.
            </p>
            <div className="d-flex justify-content-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem', transition: 'color 0.3s' }} className="hover-primary">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem', transition: 'color 0.3s' }} className="hover-primary">
                <FaInstagram />
              </a>
              <a href="https://wa.me/919354551145" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem', transition: 'color 0.3s' }} className="hover-primary">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <div className="border-top" style={{ borderColor: 'rgba(255,255,255,0.1) !important', margin: '30px 0' }}></div>
        <div className="text-center">
          <p style={{ color: '#a0aec0', margin: 0, fontSize: '0.9rem' }}>© {new Date().getFullYear()} NextTrip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
