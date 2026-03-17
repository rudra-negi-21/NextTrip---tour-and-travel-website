import React, { useState } from "react";
import Footer from "../../footer";
import "bootstrap/dist/css/bootstrap.min.css";
import DelhiImg from "../package/delhi.jpg";


function DelhiTrip() {
  const packageName = "Delhi Sightseeing Tour (1 Day)";
  const phoneNumber = "919354551145"; 

  const [startDate, setStartDate] = useState("");
  const [members, setMembers] = useState(2);
  const [notes, setNotes] = useState("");

  const handleWhatsAppBooking = () => {
    const message = `Hello, I am interested in the *${packageName}*.\n\n` +
      `Preferred Date: ${startDate || "TBD"}\n` +
      `Number of travelers: ${members}\n` +
      `Notes: ${notes || "None"}\n\n` +
      `Please share availability, final price, and booking steps.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div>
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h1> {packageName}</h1>
        <p className="text-muted">
          Explore Delhi’s iconic monuments and culture in one day  
          <br />Duration: <strong>1 Day (8 AM – 8 PM)</strong>
        </p>
      </div>

      {/* Banner Image */}
      <div className="ratio ratio-16x9 mb-4">
        <img
          src={DelhiImg}
          alt="Delhi Tour"
          className="img-fluid rounded"
        />
      </div>

      {/* Package Info & Booking */}
      <div className="row my-4">
        <div className="col-lg-6 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4>Package At a Glance</h4>
              <p><strong>Price:</strong> Starting at <span className="text-success">₹2,499 / person</span></p>
              <p><strong>Pickup:</strong> Anywhere in Delhi / NCR</p>
              <p><strong>Transport:</strong> Private AC cab</p>
              <p><strong>Includes:</strong> Sightseeing, guide, driver, entry tickets (selected monuments)</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Book / Enquire</h5>
              <div className="mb-2">
                <label className="form-label small">Preferred date</label>
                <input
                  type="date"
                  className="form-control"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <label className="form-label small">Number of travelers</label>
                <input
                  type="number"
                  min="1"
                  className="form-control"
                  value={members}
                  onChange={(e) => setMembers(Number(e.target.value))}
                />
              </div>

              <div className="mb-2">
                <label className="form-label small">Notes / Requests</label>
                <textarea
                  className="form-control"
                  rows="2"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Special requests (optional)"
                />
              </div>

              <button className="btn btn-success w-100" onClick={handleWhatsAppBooking}>
                <strong>Enquire on WhatsApp</strong>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary */}
<div className="my-4">
  <h3> Itinerary</h3>

  <div className="border rounded p-3 mb-3">
    <h6>Morning – Pickup & Monuments</h6>
    <p>
      Pickup from your location. Visit India Gate, Rashtrapati Bhavan,
      and Parliament House (outside view).
    </p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Late Morning – Heritage Sites</h6>
    <p>
      Visit Red Fort & Jama Masjid. Explore Chandni Chowk market.
    </p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Afternoon – Qutub Minar & Humayun’s Tomb</h6>
    <p>
      Guided tour of two UNESCO World Heritage Sites.
    </p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Evening – Lotus Temple & Akshardham</h6>
    <p>
      Peaceful visit to Lotus Temple, then Akshardham Temple
      (light & sound show optional).
    </p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Night – Drop</h6>
    <p>
      Return drop at your location in Delhi / NCR.
    </p>
  </div>
</div>


      {/* Inclusions / Exclusions */}
      <div className="row my-4">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h4> Inclusions</h4>
              <ul>
                <li>AC private cab for full day</li>
                <li>Professional driver & guide</li>
                <li>Pickup & drop in Delhi/NCR</li>
                <li>Entry tickets (India Gate, Qutub Minar, Humayun’s Tomb)</li>
                <li>Complimentary water bottles</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h4> Exclusions</h4>
              <ul>
                <li>Meals & personal expenses</li>
                <li>Camera / video charges</li>
                <li>Akshardham light & sound show tickets</li>
                <li>Anything not mentioned in inclusions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Price & CTA */}
      <div className="row my-5">
        <div className="col-md-8">
          <h4>Offer Price</h4>
          <p>
            <strong className="h4 text-success">₹2,499 per person</strong>
            <span className="text-muted d-block">(Minimum 2 travelers required)</span>
          </p>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <button className="btn btn-lg btn-success w-100" onClick={handleWhatsAppBooking}>
            <strong>Enquire / Book on WhatsApp</strong>
          </button>
        </div>
      </div>
    </div>
      <Footer/>
      </div>
  );
}

export default DelhiTrip;
