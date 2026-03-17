import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { PackageContext } from "../PackageContext";
import adv2 from '../components/adv2.jpg';
import family from '../components/family.jpg';
import kedar from '../components/kedar.jpg';
import couple from '../components/couple.jpg';
import weekend from '../components/weekend.jpg';
import delhi from '../components/delhi.jpg';

function Cards() {
  const { setSelectedPackage } = useContext(PackageContext);

  return (
    <div style={{ backgroundColor: 'var(--light)', padding: '60px 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--dark)' }}>Explore Our <span className="text-primary-brand">Popular Packages</span></h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Discover breathtaking destinations and create unforgettable memories with our curated travel experiences.</p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <Card className="premium-card h-100">
              <Card.Img variant="top" src={adv2} />
              <Card.Body className="d-flex flex-column" style={{ padding: '24px' }}>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--dark)' }}>Adventure Trip</Card.Title>
                <Card.Text style={{ color: '#64748b', marginBottom: '20px', flex: 1 }}>Thrilling adventure activities like rafting, trekking, skiing.</Card.Text>
                <Link to="/AdventureTrip" className="btn-primary-custom text-center w-100 mt-auto" onClick={() => setSelectedPackage("AdventureTrip")}>
                  Explore Adventure
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <Card className="premium-card h-100">
              <Card.Img variant="top" src={family} />
              <Card.Body className="d-flex flex-column" style={{ padding: '24px' }}>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--dark)' }}>Family Trip</Card.Title>
                <Card.Text style={{ color: '#64748b', marginBottom: '20px', flex: 1 }}>Fun-filled trips suitable for the whole family.</Card.Text>
                <Link to="/Family" className="btn-primary-custom text-center w-100 mt-auto" onClick={() => setSelectedPackage("Family")}>
                  Plan Family Trip
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <Card className="premium-card h-100">
              <Card.Img variant="top" src={kedar} />
              <Card.Body className="d-flex flex-column" style={{ padding: '24px' }}>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--dark)' }}>Char Dham Trip</Card.Title>
                <Card.Text style={{ color: '#64748b', marginBottom: '20px', flex: 1 }}>Spiritual journey to the four holy shrines in Uttarakhand.</Card.Text>
                <Link to="/CharDham" className="btn-primary-custom text-center w-100 mt-auto" onClick={() => setSelectedPackage("CharDham")}>
                  View Journey
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <Card className="premium-card h-100">
              <Card.Img variant="top" src={couple} />
              <Card.Body className="d-flex flex-column" style={{ padding: '24px' }}>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--dark)' }}>Manali Honeymoon</Card.Title>
                <Card.Text style={{ color: '#64748b', marginBottom: '20px', flex: 1 }}>Romantic getaway for couples in the mountains.</Card.Text>
                <Link to="/Manali" className="btn-primary-custom text-center w-100 mt-auto" onClick={() => setSelectedPackage("Manali")}>
                  Discover Romance
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <Card className="premium-card h-100">
              <Card.Img variant="top" src={weekend} />
              <Card.Body className="d-flex flex-column" style={{ padding: '24px' }}>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--dark)' }}>Weekend Trip</Card.Title>
                <Card.Text style={{ color: '#64748b', marginBottom: '20px', flex: 1 }}>Quick escapes perfect for a weekend refresh.</Card.Text>
                <Link to="/Weekend" className="btn-primary-custom text-center w-100 mt-auto" onClick={() => setSelectedPackage("Weekend")}>
                  Book Escape
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <Card className="premium-card h-100">
              <Card.Img variant="top" src={delhi} />
              <Card.Body className="d-flex flex-column" style={{ padding: '24px' }}>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--dark)' }}>Delhi Day Trip</Card.Title>
                <Card.Text style={{ color: '#64748b', marginBottom: '20px', flex: 1 }}>Explore Delhi’s top attractions in just one day.</Card.Text>
                <Link to="/Delhi" className="btn-primary-custom text-center w-100 mt-auto" onClick={() => setSelectedPackage("Delhi")}>
                  Explore Delhi
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
