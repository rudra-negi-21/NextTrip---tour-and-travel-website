import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../footer";
import weekend from '../package/weekend.jpg';

function Weekend() {
  const packageName = "Weekend Escape – Mussoorie & Dehradun (2N/3D)";
  const phoneNumber = "919354551145"; 
  const [startDate, setStartDate] = useState("");
  const [members, setMembers] = useState(2);
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
        <h1>{packageName}</h1>
        <p className="text-muted">
          Quick getaway from Delhi / NCR  
          <br />Duration: <strong>2 Nights / 3 Days</strong>
        </p>
      </div>

      <div className="ratio ratio-16x9 mb-4">
        <img
          src={weekend}
          alt="Mussoorie & Dehradun"
          className="img-fluid rounded"
        />
      </div>

      <div className="row my-4">
        <div className="col-lg-6 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4>Package At a Glance</h4>
              <p><strong>Price:</strong> Starting at <span className="text-success">₹9,999 / person</span></p>
              <p><strong>Pickup:</strong> Delhi / Noida / Gurugram</p>
              <p><strong>Accommodation:</strong> 3-star hotels / guesthouses</p>
              <p><strong>Includes:</strong> Breakfast, dinner, sightseeing cab, guide</p>
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

<div className="my-4">
  <h3> Itinerary</h3>

  <div className="border rounded p-3 mb-3">
    <h6>Day 1 — Delhi → Mussoorie</h6>
    <p>
      Morning pickup from Delhi, drive to Mussoorie (approx. 6–7 hrs).
      Evening leisure walk on Mall Road.
    </p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 2 — Mussoorie Sightseeing</h6>
    <p>
      Kempty Falls, Gun Hill, Camel’s Back Road, Lal Tibba.
      Evening free for shopping & local cafes.
    </p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 3 — Mussoorie → Dehradun → Delhi</h6>
    <p>
      Drive via Dehradun, visit Robber’s Cave & Sahastradhara.
      Evening return to Delhi.
    </p>
  </div>
</div>


      {/* Price & CTA */}
      <div className="row my-5">
        <div className="col-md-8">
          <h4>Offer Price</h4>
          <p>
            <strong className="h4 text-success">₹9,999 per person</strong>
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
export default Weekend;