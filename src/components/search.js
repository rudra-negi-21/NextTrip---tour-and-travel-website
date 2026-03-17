import React, { useState } from "react";

function Search() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [member, setMember] = useState(1);

  const handleSearch = () => {
    const message = `I want to travel from ${from} to ${to} on ${date} with ${member} members. Please book a ride that is fast, safe, and comfortable.`;
    const url = `https://wa.me/919354551145?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: "80px 0", backgroundColor: "#fff", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="glass-panel" style={{ width: "100%", maxWidth: "800px", borderRadius: "20px", padding: "40px", margin: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--dark)" }}>Book Your <span className="text-primary-brand">Perfect Ride</span></h2>
          <p style={{ fontSize: "1.1rem", color: "#64748b", marginTop: "10px" }}>Fast, reliable, and hassle-free cab booking at your fingertips! 🚖</p>
        </div>

        <div className="row g-3">
          <div className="col-md-6">
            <label style={{ fontWeight: 600, color: "var(--dark)", marginBottom: "8px", display: "block" }}>From</label>
            <input
              className="form-control premium-input" type="text" placeholder="Starting Location" value={from} onChange={(e) => setFrom(e.target.value)} required
            />
          </div>
          <div className="col-md-6">
            <label style={{ fontWeight: 600, color: "var(--dark)", marginBottom: "8px", display: "block" }}>To</label>
            <input
              className="form-control premium-input" type="text" placeholder="Destination" value={to} onChange={(e) => setTo(e.target.value)} required
            />
          </div>
          <div className="col-md-6">
            <label style={{ fontWeight: 600, color: "var(--dark)", marginBottom: "8px", display: "block" }}>Date</label>
            <input
              className="form-control premium-input" type="date" value={date} onChange={(e) => setDate(e.target.value)} required
            />
          </div>
          <div className="col-md-6">
            <label style={{ fontWeight: 600, color: "var(--dark)", marginBottom: "8px", display: "block" }}>Passengers</label>
            <input
              className="form-control premium-input" type="number" min="1" placeholder="Number of Members" value={member} onChange={(e) => setMember(e.target.value)} required
            />
          </div>
          <div className="col-12 mt-4 text-center">
            <button
              className="btn-primary-custom w-100" style={{ padding: "14px", fontSize: "1.1rem" }} onClick={handleSearch}
            >
              Search & Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
