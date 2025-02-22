import React from 'react';
import Layout from '../components/Layout/Layout';
import about_us from '../assets/about_us.jpg';
 // Optional: Import custom styles if needed

function About() {
  return (
    <Layout  title="About Us - Ecommerce App">
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6">
            <img src={about_us} alt="About Us" className="img-fluid" />
          </div>

          {/* About Us Text */}
          <div className="col-md-6">
            <h1>About Us</h1>
            <p>
              Welcome to our company! We are dedicated to providing exceptional service and high-quality products. Our team is passionate about what we do, and we strive to exceed our customers' expectations.
            </p>
            <p>
              Our mission is to deliver value and build long-lasting relationships with our clients. We believe in innovation, integrity, and excellence. Thank you for taking the time to learn more about us!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
