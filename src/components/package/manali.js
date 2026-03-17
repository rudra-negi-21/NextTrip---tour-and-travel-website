import React, { useState } from "react";
import couple from '../package/couple.jpg';
import Footer from "../../footer";

import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

 function Manali() {
  const packageName = "Honeymoon Special – Manali & Shimla (5N/6D)";
  const phoneNumber = "919354551145"; 

  const [startDate, setStartDate] = useState("");
  const [members, setMembers] = useState(2);
  const [notes, setNotes] = useState("");

  const handleWhatsAppBooking = () => {
    const message = `Hello, I am interested in the *${packageName}*.\n\n` +
      `Starting Point: Delhi\n` +
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
      {/* Header / Title */}
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="mb-2"> {packageName}</h1>
          <p className="text-muted">
            Starting Point: <strong>Delhi</strong> · Duration: <strong>5 Nights / 6 Days</strong>
          </p>
        </div>
      </div>

      <img
          className="d-block w-100 img-height"
          src={couple}
          alt="First slide"
        />

      

      {/* Itinerary */}
<div className="row my-4">
  <div className="col-12">
    <h3>Itinerary</h3>

    <div className="border rounded p-3 mb-3">
      <h6>Day 1 — Delhi → Shimla</h6>
      <p>
        Departure from Delhi by AC Volvo / Private cab. Welcome drink on arrival.
        Check-in at 3-star hotel. Evening free for Mall Road walk.
      </p>
    </div>

    <div className="border rounded p-3 mb-3">
      <h6>Day 2 — Shimla Sightseeing</h6>
      <p>
        Kufri excursion, Jakhoo Temple, Lakkar Bazaar shopping.
      </p>
    </div>

    <div className="border rounded p-3 mb-3">
      <h6>Day 3 — Shimla → Manali</h6>
      <p>
        Scenic drive through Kullu Valley, optional river rafting,
        check-in at Manali hotel.
      </p>
    </div>

    <div className="border rounded p-3 mb-3">
      <h6>Day 4 — Manali Local Sightseeing</h6>
      <p>
        Hadimba Temple, Tibetan Monastery, Vashisht hot springs,
        romantic candle-light dinner at the hotel.
      </p>
    </div>

    <div className="border rounded p-3 mb-3">
      <h6>Day 5 — Solang Valley / Rohtang (weather permitting)</h6>
      <p>
        Snow activities (skiing, snow scooter), optional paragliding,
        professional couple photoshoot.
      </p>
    </div>

    <div className="border rounded p-3 mb-3">
      <h6>Day 6 — Manali → Delhi</h6>
      <p>
        Breakfast and departure to Delhi. End of tour.
      </p>
    </div>

  </div>
</div>


      {/* Inclusions / Exclusions */}
      <div className="row my-4">
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h4>Inclusions</h4>
              <ul>
                <li>Accommodation for 5 nights (honeymoon-decorated suite)</li>
                <li>Daily breakfast & dinner</li>
                <li>Private cab for entire tour</li>
                <li>Welcome drink, complimentary cake & flowers</li>
                <li>All tolls, parking, and driver allowances</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h4>Exclusions</h4>
              <ul>
                <li>Air / Train tickets to/from Delhi</li>
                <li>Personal expenses, tips, and laundry</li>
                <li>Charges for optional adventure activities</li>
                <li>Anything not mentioned in inclusions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Top section: image + quick info */}
      <div className="row align-items-center my-4">
       
        <div className="col-lg-12 mb-3">
          <div className="card col-lg-12 shadow-sm ">
            <div className="card-body">
              <h4 className="card-title">Package At a Glance</h4>
              <p className="mb-1"><strong>Price:</strong> Starting at <span className="text-success">₹25,999 / couple</span></p>
              <p className="mb-1"><strong>Pickup:</strong> Delhi (Free pickup & drop)</p>
              <p className="mb-1"><strong>Accommodation:</strong> 3-star honeymoon suite (decorated)</p>
              <p className="mb-0"><strong>Includes:</strong> Breakfast & dinner, private cab, welcome drink, cake & flowers</p>
            </div>
          </div>

  
      {/* Price & CTA */}
      <div className="row my-4">
        <div className="col-md-8">
          <h4>Offer Price</h4>
          <p>
            <strong className="h4 text-success">₹25,999 per couple</strong>
            <span className="text-muted d-block">(Seasonal rates may vary. Contact for exact quote.)</span>
          </p>
        </div>

        <div className="col-md-4 d-flex align-items-center">
          <button className="btn btn-lg btn-success w-100" onClick={handleWhatsAppBooking}>
            <strong>Enquire / Book on WhatsApp</strong>
          </button>
        </div>
      </div>

      {/* Small notes */}
      <div className="row">
        <div className="col-12 text-muted small">
          <p>
            <strong>Note:</strong> Rohtang Pass visits depend on weather and permit availability. Advance booking recommended. Documents and ID proof required at the time of travel.
          </p>
        </div>
      </div>

              {/* Booking form */}
          <div className="card mt-3 shadow-sm col-lg-6" >
            <div className="card-body" >
              <h5 className="mb-3">Book / Enquire</h5>
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
                  onChange={(e) => setMembers(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <label className="form-label small">Notes / Requests (optional)</label>
                <textarea
                  className="form-control"
                  rows="2"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="E.g., room preference, special requests..."
                />
              </div>

              <button
                className="btn btn-success w-100"
                onClick={handleWhatsAppBooking}
              >
                <strong>Book on WhatsApp</strong>
              </button>

              <small className="text-muted d-block mt-2">
                Clicking the button will open WhatsApp with a pre-filled message.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
export default Manali;
