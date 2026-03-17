import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import Footer from "../../footer";
import adv2 from "../package/adv2.jpg";

function AdventureTrip() {
  const packageName = "Adventure Blast – Rishikesh & Auli (4N/5D)";
  const phoneNumber = "919354551145";

  const [startDate, setStartDate] = useState("");
  const [members, setMembers] = useState(2);
  const [notes, setNotes] = useState("");

  const handleWhatsAppBooking = () => {
    const message =
      `Hello, I am interested in the ${packageName}.\n\n` +
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

        <div className="text-center mb-4">
          <h1>{packageName}</h1>
          <p className="text-muted">
            Adventure-filled getaway from Delhi / NCR
            <br />
            Duration: <strong>4 Nights / 5 Days</strong>
          </p>
        </div>

        <img
          src={adv2}
          alt="Rishikesh & Auli"
          className="img-fluid rounded mb-4"
        />

        <div className="row my-4">
          <div className="col-lg-6 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4>Package At a Glance</h4>
                <p>
                  <strong>Price:</strong>{" "}
                  <span className="text-success">₹21,999 / person</span>
                </p>
                <p><strong>Pickup:</strong> Delhi / Noida / Gurugram</p>
                <p><strong>Accommodation:</strong> 3-star hotels / camps</p>
                <p>
                  <strong>Includes:</strong> Breakfast & dinner, adventure
                  activities, private cab, guide
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>Book / Enquire</h5>

                <div className="mb-2">
                  <label className="form-label small">
                    Preferred start date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label small">
                    Number of travelers
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="form-control"
                    value={members}
                    onChange={(e) =>
                      setMembers(Math.max(1, Number(e.target.value)))
                    }
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label small">
                    Notes / Requests
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Special requests (optional)"
                  />
                </div>

                <button
                  className="btn btn-success w-100"
                  onClick={handleWhatsAppBooking}
                >
                  <strong>Enquire on WhatsApp</strong>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4">
            <h3>Itinerary</h3>

            <div className="border rounded p-3 mb-3">
              <h6>Day 1 – Delhi to Rishikesh</h6>
              <p>
                Morning departure from Delhi. Evening leisure by the Ganges and optional
                Ganga Aarti.
              </p>
            </div>

            <div className="border rounded p-3 mb-3">
              <h6>Day 2 – Rishikesh Adventure</h6>
              <p>
                River rafting, zip-lining, trekking, evening bonfire and camping.
              </p>
            </div>

            <div className="border rounded p-3 mb-3">
              <h6>Day 3 – Rishikesh to Auli</h6>
              <p>
                Drive to Auli, check-in at mountain resort, evening cable car ride.
              </p>
            </div>

            <div className="border rounded p-3 mb-3">
              <h6>Day 4 – Auli Adventure</h6>
              <p>
                Skiing or snowboarding, trekking, optional paragliding, sightseeing.
              </p>
            </div>

            <div className="border rounded p-3 mb-3">
              <h6>Day 5 – Auli to Delhi</h6>
              <p>
                Breakfast and return journey to Delhi.
              </p>
            </div>
          </div>


        <div className="row my-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h4>Inclusions</h4>
                <ul>
                  <li>Accommodation for 4 nights</li>
                  <li>Breakfast and dinner</li>
                  <li>Adventure activities</li>
                  <li>Private cab for entire tour</li>
                  <li>Experienced guide</li>
                  <li>All permits and tolls</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h4>Exclusions</h4>
                <ul>
                  <li>Travel to and from Delhi</li>
                  <li>Personal expenses</li>
                  <li>Optional activities</li>
                  <li>Anything not mentioned in inclusions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-md-8">
            <h4>Offer Price</h4>
            <p>
              <strong className="h4 text-success">
                ₹21,999 per person
              </strong>
              <span className="text-muted d-block">
                Seasonal rates may vary
              </span>
            </p>
          </div>

          <div className="col-md-4 d-flex align-items-center">
            <button
              className="btn btn-lg btn-success w-100"
              onClick={handleWhatsAppBooking}
            >
              <strong>Enquire / Book on WhatsApp</strong>
            </button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default AdventureTrip;
