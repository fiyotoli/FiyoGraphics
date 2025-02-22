import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { IoArrowRedoCircle, IoArrowUndoCircle } from "react-icons/io5";

const Testimony = () => {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      feedback:
        "The team provided an exceptional service, exceeding our expectations with their design and development expertise.",
      image: "https://www.w3schools.com/w3images/avatar2.png", // Google Avatar Image
    },
    {
      name: "Mulugeta Alemu",
      role: "Graphic Designer, Mulu Design Studio",
      feedback:
        "As a graphic designer, I truly appreciate the creative insights and technical proficiency of the team. They helped bring my visions to life beautifully.",
      image: "https://www.w3schools.com/w3images/avatar1.png", // Google Avatar Image
    },
    {
      name: "Alice Johnson",
      role: "Founder, InnovateNow",
      feedback:
        "Highly recommend their services! They delivered on time and exceeded expectations in every aspect.",
      image: "https://www.w3schools.com/w3images/avatar2.png", // Google Avatar Image
    },
    {
      name: "Michael Brown",
      role: "CTO, DevSolutions",
      feedback:
        "A great experience working with the team. Their expertise and professionalism are unparalleled.",
      image: "https://www.w3schools.com/w3images/avatar1.png", // Google Avatar Image
    },
    {
      name: "Liya Bekele",
      role: "Graphic Designer, LiyaDesigns",
      feedback:
        "Working with them was a wonderful experience. As a designer, I value the attention to detail and innovative approach they brought to our project.",
      image: "https://www.w3schools.com/w3images/avatar2.png", // Google Avatar Image
    },
    {
      name: "David Wilson",
      role: "COO, FastTech",
      feedback:
        "Exceptional quality and attention to detail. Highly recommend their services.",
      image: "https://www.w3schools.com/w3images/avatar1.png", // Google Avatar Image
    },
    {
      name: "Sileshi Berhanu",
      role: "Lead Developer, SileshTech",
      feedback:
        "They helped us achieve our goals quickly and efficiently. I highly recommend their service.",
      image: "https://www.w3schools.com/w3images/avatar2.png", // Google Avatar Image
    },
    {
      name: "Mekdes Tesfaye",
      role: "Manager, Global Co.",
      feedback:
        "Amazing collaboration! The results exceeded our expectations, and the team was very responsive.",
      image: "https://www.w3schools.com/w3images/avatar1.png", // Google Avatar Image
    },
    {
      name: "Tsehaynesh Woldemariam",
      role: "Business Owner, Tsehay Designs",
      feedback:
        "They provided a unique solution to our problem and delivered excellent results on time.",
      image: "https://www.w3schools.com/w3images/avatar2.png", // Google Avatar Image
    },
    {
      name: "Hussein Abdi",
      role: "CEO, Hussein Enterprises",
      feedback:
        "Working with them was a pleasure. They are experts in their field and exceeded all expectations.",
      image: "https://www.w3schools.com/w3images/avatar1.png", // Google Avatar Image
    },
    {
      name: "Tena Gebremedhin",
      role: "Creative Director, Tena Creative Works",
      feedback:
        "As a creative director, I am impressed with their innovative designs and consistent quality. Their work has truly elevated my brand.",
      image: "https://www.w3schools.com/w3images/avatar2.png", // Google Avatar Image
    },
  ];

  const chunkedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    chunkedTestimonials.push(testimonials.slice(i, i + 3));
  }

  const handlePrev = () => setIndex((prevIndex) => (prevIndex - 1 + chunkedTestimonials.length) % chunkedTestimonials.length);
  const handleNext = () => setIndex((prevIndex) => (prevIndex + 1) % chunkedTestimonials.length);

  return (
    <div id="testimony" className="container my-5 text-center">
      <button className="btn mb-4  btn-outline-success shadow-sm">
 Testimony
</button>
      <Carousel
        activeIndex={index}
        onSelect={(selectedIndex) => setIndex(selectedIndex)}
        indicators={false}
        controls={false}
        interval={3000} // Set the auto-carousel interval (e.g., 3 seconds)
        pause="hover"  // Pause on hover
      >
        {chunkedTestimonials.map((group, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <div className="row justify-content-center">
              {group.map((testimonial, idx) => (
                <div className="col-md-6 col-lg-4 mb-4" key={idx}> {/* 3 cards per row */}
                  <div className="card h-100 shadow-sm">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="card-img-top rounded-circle mx-auto mt-3"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{testimonial.name}</h5>
                      <h6 className="card-subtitle text-muted mb-3">
                        {testimonial.role}
                      </h6>
                      <p className="card-text text-muted">
                        {testimonial.feedback}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Navigation Buttons */}
      <div className="d-flex justify-content-center mt-4">
        {/* Prev Button */}
        <button
          className="btn btn-outline-success text-white mx-2"
          onClick={handlePrev}
          style={{
            backgroundColor: "green", // Green background initially
            border: "2px solid green", // Green border
            transition: "background-color 0.3s ease, color 0.3s ease", // Smooth transition for color change
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "transparent"; // Change to transparent on hover
            e.target.style.color = "green"; // Change text color to green on hover
            e.target.querySelector("svg").style.fill = "green"; // Change icon color to green on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "green"; // Revert to green background
            e.target.style.color = "white"; // Revert text color to white on hover leave
            e.target.querySelector("svg").style.fill = "white"; // Revert icon color to white on hover leave
          }}
        >
          <IoArrowUndoCircle size={35} className="me-1" />
        </button>

        {/* Next Button */}
        <button
          className="btn btn-outline-success mx-2"
          onClick={handleNext}
          style={{
            backgroundColor: "transparent", // Transparent background initially
            border: "2px solid green", // Green border
            transition: "background-color 0.3s ease, color 0.3s ease", // Smooth transition for color change
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "green"; // Change to green on hover
            e.target.style.color = "white"; // Change text color to white on hover
            e.target.querySelector("svg").style.fill = "white"; // Change icon color to white on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent"; // Revert to transparent background
            e.target.style.color = "green"; // Revert text color to green on hover leave
            e.target.querySelector("svg").style.fill = "green"; // Revert icon color to green on hover leave
          }}
        >
          <IoArrowRedoCircle size={35} className="ms-1" />
        </button>
      </div>
    </div>
  );
};

export default Testimony;
