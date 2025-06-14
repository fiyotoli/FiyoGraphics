import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, Toaster } from "react-hot-toast";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formElement = form.current;
    if (formElement.checkValidity() === false) {
      formElement.classList.add("was-validated");
    } else {
      emailjs
        .sendForm(
          "service_xq904j8",
          "template_kzpvw47",
          form.current,
          "qwd253r0hHhtgB8s_"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            toast.error("Failed to send the message. Please try again.");
          }
        );

      formElement.reset();
      formElement.classList.remove("was-validated");
    }
  };

  return (
    <div className="container mt-5 pt-5 " id="contact">
      <div className="row">
        {/* Left Section: Contact Form */}
        <div className="col-md-6 mb-5">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="needs-validation"
            noValidate
          >
            <button className="btn mb-4 mt-5 btn-outline-success shadow-sm">
 Contact Me
</button>
            <div className="mb-3">
              <label htmlFor="user_name" className="form-label fw-bold text-success">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="form-control"
                required
              />
              <div className="invalid-feedback">Please enter your name.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="user_email" className="form-label fw-bold text-success">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                className="form-control"
                required
              />
              <div className="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-bold text-success">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="5"
                required
              ></textarea>
              <div className="invalid-feedback">Please enter your message.</div>
            </div>
            <button type="submit" className="btn btn-success btn-sm px-4">
              Send
            </button>
          </form>
        </div>

        {/* Right Section: Info */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2>Get in Touch</h2>
          <p>
            I’d love to hear from you! Feel free to reach out to us using the
            contact form or the following details:
          </p>
          <ul className="list-unstyled">
            <li className="mb-2">
              <FaPhone className="me-2 text-success" style={{ fontSize: "1.5rem" }} />
              +251980167842            </li>
            <li className="mb-2">
              <FaEnvelope className="me-2 text-success" style={{ fontSize: "1.5rem" }} />
              tasfayneshtolasa35@gmail.com
            </li>
            <li>
              <FaMapMarkerAlt className="me-2 text-success" style={{ fontSize: "1.5rem" }} />
              Sefere Selam, Addis Ababa, Ethiopia
            </li>
          </ul>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Contact;
