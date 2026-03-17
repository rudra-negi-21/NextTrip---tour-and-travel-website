import React, { useState } from "react";
import chardham from '../package/chardham.png';
import "bootstrap/js/dist/dropdown";
import Footer from "../../footer";
import "bootstrap/dist/css/bootstrap.min.css";

function CharDham() {
  const packageName = "Char Dham Yatra – Uttarakhand (10N/11D)";
  const phoneNumber = "919354551145";

  const [startDate, setStartDate] = useState("");
  const [members, setMembers] = useState(4);
  const [notes, setNotes] = useState("");

  const handleWhatsAppBooking = () => {
    const message = `Hello, I am interested in the *${packageName}*.\n\n` +
      `Starting Point: Haridwar / Delhi\n` +
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
          Route: Yamunotri · Gangotri · Kedarnath · Badrinath  
          <br />Duration: <strong>10 Nights / 11 Days</strong>
        </p>
      </div>

      {/* Banner Image */}
      <div className="ratio ratio-16x9 mb-4">
        <img
          src={chardham}
          alt="Char Dham Yatra"
          className="img-fluid rounded"
        />
      </div>

      {/* Quick Info + Booking */}
      <div className="row my-4">
        <div className="col-lg-6 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4>Package At a Glance</h4>
              <p><strong>Price:</strong> Starting at <span className="text-success">₹39,999 / person</span></p>
              <p><strong>Pickup:</strong> Haridwar / Delhi</p>
              <p><strong>Accommodation:</strong> Standard hotels / guesthouses</p>
              <p><strong>Includes:</strong> Breakfast & dinner, transfers, darshan assistance</p>
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
                  placeholder="E.g., senior citizens, special arrangements..."
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
<div className="my-5">
  <h3>🗓 Itinerary</h3>

  <div className="border rounded p-3 mb-3">
    <h6>Day 1 – Delhi → Haridwar</h6>
    <p>Pickup from Delhi, drive to Haridwar, Ganga Aarti at Har Ki Pauri.</p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 2 – Haridwar → Barkot</h6>
    <p>Drive to Barkot (base for Yamunotri). Overnight stay.</p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 3 – Yamunotri Darshan</h6>
    <p>Trek / pony ride to Yamunotri Temple, return to Barkot.</p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 4 – Barkot → Uttarkashi</h6>
    <p>Drive to Uttarkashi. Visit Kashi Vishwanath temple.</p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 5 – Gangotri Darshan</h6>
    <p>Excursion to Gangotri Temple, holy dip in Bhagirathi River. Return to Uttarkashi.</p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 6 – Uttarkashi → Guptkashi</h6>
    <p>Scenic drive along Mandakini River. Stay at Guptkashi.</p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 7 – Kedarnath Darshan</h6>
    <p>Drive to Sonprayag, trek / helicopter to Kedarnath, darshan at Kedarnath Temple.</p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 8 – Return from Kedarnath</h6>
    <p>Morning darshan, return trek/heli to Sonprayag. Overnight at Guptkashi.</p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 9 – Guptkashi → Badrinath</h6>
    <p>Drive to Badrinath via Joshimath. Evening Aarti.</p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 10 – Badrinath Darshan</h6>
    <p>Morning darshan at Badrinath Temple, Mana Village sightseeing.</p>
  </div>

  <div className="border rounded p-3 mb-3">
    <h6>Day 11 – Badrinath → Rishikesh / Delhi</h6>
    <p>Drive back, end of Yatra.</p>
  </div>
</div>


      {/* Inclusions & Exclusions */}
      <div className="row my-4">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h4>✅ Inclusions</h4>
              <ul>
                <li>Accommodation for 10 nights</li>
                <li>Breakfast & dinner daily</li>
                <li>Transfers by private vehicle</li>
                <li>Assistance for darshan & yatra permits</li>
                <li>All tolls, parking, driver allowance</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h4>❌ Exclusions</h4>
              <ul>
                <li>Flight / Train tickets to Delhi</li>
                <li>Helicopter charges for Kedarnath</li>
                <li>Personal expenses, tips, and pooja charges</li>
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
            <strong className="h4 text-success">₹39,999 per person</strong>
            <span className="text-muted d-block">(Rates may vary depending on group size & season)</span>
          </p>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <button className="btn btn-lg btn-success w-100" onClick={handleWhatsAppBooking}>
            <strong>Enquire / Book on WhatsApp</strong>
          </button>
        </div>
      </div>

      <div className="text-muted small">
        <p><strong>Note:</strong> Kedarnath darshan subject to weather & trek conditions. Senior citizens are advised to consult doctors before travel.</p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
export default CharDham;