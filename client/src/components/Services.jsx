import React from "react";
import { FaPaintBrush, FaPalette, FaBullhorn } from "react-icons/fa"; // Importing React Icons

const Services = () => {
  return (
    <div id="services" className="container text-center  ">
     <button className="btn mb-4 mt-5 btn-outline-success shadow-sm">
  My Services
</button>
      
      {/* Service Cards */}
      <div className="row justify-content-center">
        {/* Service 1 (Design) */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "10px" }}>
            <div className="card-body">
              <p>
                <FaPaintBrush style={{ fontSize: "3rem", color: "#28a745" }} /> {/* Professional Design Icon */}
              </p>
              <h3 className="card-title">Design</h3>
              <p className="text-muted">
                I create stunning visuals, from logos to full branding solutions. My design services bring your ideas to life.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2 (Professional Graphics Designer) */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card bg-success text-white shadow-lg" style={{ borderRadius: "10px" }}>
            <div className="card-body">
              <p>
                <FaPalette style={{ fontSize: "3rem", color: "white" }} /> {/* Professional Graphics Designer Icon */}
              </p>
              <h3 className="card-title text-white">Professional Graphics Designer</h3>
              <p className="text-white">
                My professional graphic design services specialize in creating visually stunning and effective designs to elevate your brand.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3 (Branding) */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "10px" }}>
            <div className="card-body">
              <p className="text">
                <FaBullhorn style={{ fontSize: "3rem", color: "#28a745" }} /> {/* Professional Branding Icon */}
              </p>
              <h3 className="card-title">Branding</h3>
              <p className="text-muted">
                My branding services help you establish a strong presence and create a lasting impact in your industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
