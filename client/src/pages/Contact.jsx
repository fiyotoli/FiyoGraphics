import React from 'react';
import Layout from '../components/Layout/Layout';
import contact_us from '../assets/contact_us.jpg';
 // Import custom styles if needed

function Contact() {
  return (
    <Layout  title="contact - Ecommerce App">
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Contact Information */}
          <div className="col-md-6">
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us. Our team is here to help!</p>
            <p><strong>Email:</strong> support@example.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Address:</strong> 1234 Street Name, City, Country</p>
          </div>

          {/* Image */}
          <div className="col-md-6">
            <img src={contact_us} alt="Contact Us" className="img-fluid" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

