import React from "react";
import CabImg from "./package/cabcar.png";
import RudraImg from "./package/rudra.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function Know() {
  return (
    <div>
      <div className="container text-center py-5">
        <h1 className="mb-4">Welcome to NextTrip</h1>

        <img
          src={CabImg}
          alt="front"
          className="img-fluid mb-4"
          style={{ maxWidth: "min(90vw, 25rem)" }}
        />

        <p className="mx-auto" style={{ maxWidth: "800px" }}>
          At NextTrip, we believe that travel is more than just reaching a
          destination. It is about the experiences you collect along the way,
          the memories that stay with you forever, and the joy of discovering
          new places, cultures, and perspectives every time you travel.
        </p>
      </div>

      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <h3 className="card-title mb-3">Our Vision</h3>
                <p className="card-text">
                  Our vision is to make travel planning simple and stress-free
                  by helping people discover their next trip with confidence,
                  clarity, and the right information.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <h3 className="card-title mb-3">Our Mission</h3>
                <p className="card-text">
                  Our mission is to provide reliable travel guides, destination
                  ideas, and smart planning tools that help users plan better
                  trips and enjoy every journey with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="card shadow-sm text-center p-4 mx-auto" style={{ maxWidth: "min(90vw, 1150px)", margin: "auto" }}>
          <img
            src={RudraImg}
            alt="Rudra Singh Negi"
            className="rounded-circle mx-auto mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />

          <h3 className="mb-3">About the Developer</h3>

          <p>
            I am <strong>Rudra Singh Negi</strong>, A student pursuing a Diploma in Computer Science Engineering at a Polytechnic. I work on building web applications. NextTrip is a project created to apply practical development skills, focus on clean layouts, and improve overall user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Know;
