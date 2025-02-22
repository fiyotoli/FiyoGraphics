import React from 'react';
import Layout from '../components/Layout/Layout';
import privacyPolicyImage from '../assets/privacypolicy.jpg';
 // Optional: Import custom styles if needed

function Policy() {
  return (
    <Layout  title="policy terms - Ecommerce App">
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Policy Text */}
          <div className="col-md-6">
            <h1>Privacy Policy</h1>
            <p>
              At our company, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              We may collect personal information such as your name, email address, and phone number. We use this information to provide and improve our services, communicate with you, and comply with legal obligations.
            </p>
            <p>
              For more details, please review our full privacy policy on this page.
            </p>
          </div>

          {/* Image */}
          <div className="col-md-6">
            <img src={privacyPolicyImage} alt="Privacy Policy" className="img-fluid" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Policy;
