import React from "react";
import { FaCheckCircle, FaLaptop, FaPalette } from "react-icons/fa"; // Using React Icons for subtitles
import aboutImage from "../assets/hero.png";

const About = () => {
  return (
    <div id="about" className="container pt-5 my-5">
      <div className="row align-items-center pt-5">
        {/* Left Section: Image */}
        <div className="col-md-6 text-center" style={{ height: "100%" }}>
          <img
            src={aboutImage}
            alt="About"
            className="img-fluid rounded"
            style={{
              maxHeight: "400px",
              objectFit: "cover",
              height: "100%", // Ensure the image occupies full height
            }}
          />
        </div>

        {/* Right Section: Text */}
        <div className="col-md-6" style={{ height: "100%" }}>
          {/* Button with Emoji */}
          <button className="btn shadow-sm mb-3">
            <span role="img" aria-label="info" style={{ fontSize: "1.5rem" }}>
              🧑‍💼
            </span>
            Learn More
          </button>

          {/* Subtitle */}
          <h5 className="text-muted">About Me</h5>

          {/* Title */}
          <h2 className="display-6 text-success">Who I Am</h2>

          {/* Paragraph */}
          <p className="text-muted">
            I am a passionate graphic designer and web developer with a keen
            eye for creativity and innovation. My goal is to bring ideas to life
            through compelling visuals and functional designs.
          </p>

          {/* Icons and Subtitles Section */}
          <div className="mt-5">
            {/* First Subtitle */}
            <div className="mb-4 d-flex align-items-center">
              <FaPalette
                style={{
                  fontSize: "2rem",
                  color: "#28a745", // Success color
                }}
              />
              <h4
                className="text-success ms-3"
                style={{ fontSize: "1.2rem" }}
              >
                Creative Vision
              </h4>
            </div>
            <p className="text-muted">
              I focus on creating designs that effectively communicate your
              brand’s message and stand out in the market.
            </p>

            {/* Second Subtitle */}
            <div className="mb-4 d-flex align-items-center">
              <FaLaptop
                style={{
                  fontSize: "2rem",
                  color: "#28a745", // Success color
                }}
              />
              <h4
                className="text-success ms-3"
                style={{ fontSize: "1.2rem" }}
              >
                Web Development
              </h4>
            </div>
            <p className="text-muted">
              I build responsive, user-friendly websites that provide
              exceptional user experiences across all devices.
            </p>

            {/* Third Subtitle */}
            <div className="mb-4 d-flex align-items-center">
              <FaCheckCircle
                style={{
                  fontSize: "2rem",
                  color: "#28a745", // Success color
                }}
              />
              <h4
                className="text-success ms-3"
                style={{ fontSize: "1.2rem" }}
              >
                Quality Assurance
              </h4>
            </div>
            <p className="text-muted">
              Ensuring that every project meets high standards of quality
              and consistency is my top priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;