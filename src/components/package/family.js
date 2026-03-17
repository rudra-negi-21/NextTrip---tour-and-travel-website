import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../footer";
import "bootstrap/js/dist/dropdown";

import family from '../package/family.jpg';

function Family() {
  const packageName = "Family Fun – Jaipur & Udaipur (4N/5D)";
  const phoneNumber = "919354551145"; 

  const [startDate, setStartDate] = useState("");
  const [members, setMembers] = useState(4);
  const [notes, setNotes] = useState("");

  const handleWhatsAppBooking = () => {
    const message = `Hello, I am interested in the *${packageName}*.\n\n` +
      `Preferred Start Date: ${startDate || "TBD"}\n` +
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
          Family-friendly getaway from Delhi / NCR  
          <br />Duration: <strong>4 Nights / 5 Days</strong>
        </p>
      </div>

      {/* Banner Image */}
      <div className="ratio ratio-16x9 mb-4">
        <img
          src={family}
          alt="Jaipur & Udaipur"
          className="img-fluid rounded"
        />
      </div>

      {/* Package Info & Booking */}
      <div className="row my-4">
        <div className="col-lg-6 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4>Package At a Glance</h4>
              <p><strong>Price:</strong> Starting at <span className="text-success">₹19,999 / family of 4</span></p>
              <p><strong>Pickup:</strong> Delhi / Noida / Gurugram</p>
              <p><strong>Accommodation:</strong> 3-star hotels, family rooms</p>
              <p><strong>Includes:</strong> Breakfast & dinner, sightseeing cab, guide, fun activities for kids</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Book / Enquire</h5>
              <div className="mb-2">
                <label className="form-label small">Preferred start date</label>
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
  <h3>Itinerary</h3>

  <div className="border rounded p-3 mb-3">
    <h6>Day 1 — Delhi → Jaipur</h6>
    <p>
      Morning pickup from Delhi, drive to Jaipur (approx. 5–6 hrs).
      Evening leisure at hotel or local market.
    </p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 2 — Jaipur Sightseeing</h6>
    <p>
      Amber Fort, City Palace, Hawa Mahal, and local markets.
      Evening cultural show.
    </p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 3 — Jaipur → Udaipur</h6>
    <p>
      Drive to Udaipur, evening boat ride at Lake Pichola,
      sunset views.
    </p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 4 — Udaipur Sightseeing</h6>
    <p>
      City Palace, Jagdish Temple, Saheliyon Ki Bari,
      optional folk dance & cultural program.
    </p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 5 — Udaipur → Delhi</h6>
    <p>
      Breakfast and return to Delhi. End of tour.
    </p>
  </div>
</div>


      {/* Inclusions / Exclusions */}
      <div className="row my-4">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h4>Inclusions</h4>
              <ul>
                <li>Accommodation for 4 nights</li>
                <li>Breakfast & dinner daily</li>
                <li>Private cab for sightseeing</li>
                <li>Tour guide for sightseeing</li>
                <li>Fun activities for kids (craft, games, etc.)</li>
                <li>All tolls and driver allowance</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h4>Exclusions</h4>
              <ul>
                <li>Travel to/from Delhi</li>
                <li>Personal expenses, shopping, tips</li>
                <li>Optional adventure activities</li>
                <li>Anything not listed in inclusions</li>
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
            <strong className="h4 text-success">₹19,999 per family of 4</strong>
            <span className="text-muted d-block">(Seasonal rates may vary)</span>
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

export default Family;