import React from "react";
import { FaCheckCircle, FaLaptop, FaPalette } from "react-icons/fa"; // Using React Icons for subtitles
import aboutImage from "../assets/about1.png";

const About = () => {
  return (
    <div id="about" className="container mt-md-5 pt-md-3 ">
      <div className="row align-items-center pt-5">
        {/* Left Section: Image */}
        <div className="col-md-6 text-center order-sm-1 order-2" style={{ height: "100%" }}>
          <img
            src={aboutImage}
            alt="About"
            className="img-fluid rounded"
            style={{
              maxHeight: "800px",
              objectFit: "cover",
              height: "100%", // Ensure the image occupies full height
            }}
          />
        </div>

        {/* Right Section: Text */}
        <div className="col-md-6  order-sm-2 order-1" >
          
          

          {/* Title */}
          <h2 className="display-6 fw-bold">Who I Am</h2>

          {/* Paragraph */}
          <p className="">
            I am a passionate graphic designer and web developer with a keen
            eye for creativity and innovation. My goal is to bring ideas to life
            through compelling visuals and functional designs.
          </p>

          {/* Icons and Subtitles Section */}
          <div className="mt-4">
            {/* First Subtitle */}
            <div className="mb-2 d-flex align-items-center">
              <FaPalette
                style={{
                  fontSize: "2rem",
                  color: "#28a745", // Success color
                }}
              />
              <h4
                className="text-success fw-bold ms-3"
                style={{ fontSize: "1.2rem" }}
              >
                Creative Vision
              </h4>
            </div>
            <p className="">
              I focus on creating designs that effectively communicate your
              brand’s message and stand out in the market.
            </p>

           

            {/* Third Subtitle */}
            <div className="mb-2 d-flex align-items-center">
              <FaCheckCircle
                style={{
                  fontSize: "2rem",
                  color: "#28a745", // Success color
                }}
              />
              <h4
                className="text-success fw-bold ms-3"
                style={{ fontSize: "1.2rem" }}
              >
                Quality Assurance
              </h4>
            </div>
            <p className="">
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