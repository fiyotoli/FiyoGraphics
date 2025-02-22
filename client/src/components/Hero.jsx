import React from "react";
import heroImage from "../assets/hero.png"; // Import the image
import resume from "../assets/resume.png"; // Import the resume image
import { Typewriter } from "react-simple-typewriter"; // Import Typewriter
import { FaStar } from "react-icons/fa"; // React Icon for subtitle

const Hero = () => {
  return (
    <div className="container d-flex flex-column flex-md-row align-items-center mt-5 pt-5" >
      {/* Left Section */}
      <div className="col-12 col-md-6 text-start mb-4 mb-md-0">
        {/* Subtitle */}
        <div
          className="d-inline-flex align-items-center mb-3 px-3 py-2 bg-white shadow rounded"
          style={{ maxWidth: "fit-content" }}
        >
          <FaStar className="text-warning me-2" />
          <span className="fw-bold">Graphic Designer Extraordinaire</span>
        </div>

        {/* Dynamic Header with Typewriter Effect */}
        <h1 className="display-3 text-success">
          <Typewriter
            words={[
              "Welcome to My Portfolio",
              "I Design Stunning Graphics",
              "Let's Build Something Amazing",
            ]}
            loop={0} // Infinite loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        {/* Description */}
        <p className="lead text-muted">
          Hi, I'm a passionate graphic designer with a flair for creating
          stunning visuals and unique designs. Explore my work and let’s create
          something amazing together.
        </p>

        {/* Buttons */}
        <div className="mt-4">
          <a
            href={resume} // Use the imported resume file
            download="Resume.png" // Provide a default download filename
            className="btn btn-success btn-lg me-3 mb-3"
          >
            <i className="bi bi-download"></i> Download Resume
          </a>
          <a
            href="#portfolio" // Direct path to the portfolio section
            className="btn border border-success btn-lg mb-3"
          >
            Portfolio
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-12 col-md-6 text-center">
        <img
          src={heroImage} // Use the imported image here
          alt="Hero"
          className="img-fluid"
          style={{ maxWidth: "90%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Hero;
