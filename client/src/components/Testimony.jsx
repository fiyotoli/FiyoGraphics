import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { IoArrowRedoCircle, IoArrowUndoCircle } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";

const Testimony = () => {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "Tolasa Maru",
      role: "CEO, TechCorp",
      feedback:
        "Tasfaynesh’s graphics work captured our vision perfectly. Her layout design and visual balance made everything look professional.",
      image: "https://www.w3schools.com/w3images/avatar1.png",
    },
    {
      name: "Mulugeta Alemu",
      role: "Graphic Designer, Mulu Design Studio",
      feedback:
        "As a fellow designer, I truly admire Tasfaynesh’s clean, consistent, and creative style. Her portfolio is modern and easy to follow.",
      image: "https://www.w3schools.com/w3images/avatar1.png",
    },
    {
      name: "Warke Becha",
      role: "Founder, InnovateNow",
      feedback:
        "We loved her bold color choices and use of spacing. Tasfaynesh’s design for our campaign was sharp and visually appealing.",
      image:
        "https://cdn-icons-png.freepik.com/256/9193/9193832.png",
    },
    {
      name: "Yohannis Toli",
      role: "CTO, DevSolutions",
      feedback:
        "Tasfaynesh’s portfolio really impressed me. The flow, font choices, and overall structure were top-notch and very professional.",
      image: "https://www.w3schools.com/w3images/avatar1.png",
    },
    {
      name: "Dibora Demise",
      role: "Graphic Designer, LiyaDesigns",
      feedback:
        "Her attention to detail is excellent. Every element in her graphics design shows balance, clarity, and strong creative direction.",
      image:
        "https://cdn-icons-png.freepik.com/256/9193/9193832.png",
    },
    {
      name: "Robel Urga",
      role: "COO, FastTech",
      feedback:
        "Her visuals made our brand look polished and professional. She has a great understanding of layout and branding.",
      image: "https://www.w3schools.com/w3images/avatar1.png",
    },
    {
      name: "Sileshi Berhanu",
      role: "Lead Developer, SileshTech",
      feedback:
        "The graphics and banners she created for us were clean, impactful, and delivered quickly. Highly recommend her work.",
      image: "https://www.w3schools.com/w3images/avatar1.png",
    },
    {
      name: "Mekdes Tesfaye",
      role: "Manager, Global Co.",
      feedback:
        "Tasfaynesh's design brought freshness to our marketing. Her use of typography made everything easy to read and engaging.",
      image:
        "https://cdn-icons-png.freepik.com/256/9193/9193832.png",
    },
    {
      name: "Tsehaynesh Woldemariam",
      role: "Business Owner, Tsehay Designs",
      feedback:
        "We worked with Tasfaynesh on a product launch. Her graphics were sleek, professional, and exactly what we needed to stand out.",
      image:
        "https://cdn-icons-png.freepik.com/256/9193/9193832.png",
    },
    {
      name: "Hussein Abdi",
      role: "CEO, Hussein Enterprises",
      feedback:
        "I loved her style—clean, simple, and creative. Her portfolio speaks for itself and shows great talent in visual design.",
      image: "https://www.w3schools.com/w3images/avatar1.png",
    },
    {
      name: "Tena Gebremedhin",
      role: "Creative Director, Tena Creative Works",
      feedback:
        "Tasfaynesh’s portfolio stood out to me. Her visual storytelling, color consistency, and structure are all really strong.",
      image:
        "https://cdn-icons-png.freepik.com/256/9193/9193832.png",
    },
  ];

  const chunkedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    chunkedTestimonials.push(testimonials.slice(i, i + 3));
  }

  const handlePrev = () =>
    setIndex((prevIndex) => (prevIndex - 1 + chunkedTestimonials.length) % chunkedTestimonials.length);
  const handleNext = () =>
    setIndex((prevIndex) => (prevIndex + 1) % chunkedTestimonials.length);

  return (
    <div id="testimony" className="container mt-5 text-center">
      <button className="btn mb-4 btn-outline-success shadow-sm">
        Testimony
      </button>

      <Carousel
        activeIndex={index}
        onSelect={(selectedIndex) => setIndex(selectedIndex)}
        indicators={false}
        controls={false}
        interval={4000}
        pause="hover"
      >
        {chunkedTestimonials.map((group, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <div className="row justify-content-center">
              {group.map((testimonial, idx) => (
                <div className="col-md-6 col-lg-4 mb-4" key={idx}>
                  <div className="card h-100 shadow-sm p-3">
                    <FaQuoteLeft size={30} className="text-success mb-3" />
                    <p className="text-muted fst-italic">{testimonial.feedback}</p>
                    <hr />
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle mx-auto d-block my-3"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        border: "2px solid #28a745",
                      }}
                    />
                    <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-success text-white mx-2"
          onClick={handlePrev}
          style={{
            backgroundColor: "green",
            border: "2px solid green",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "green";
            e.target.querySelector("svg").style.fill = "green";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "green";
            e.target.style.color = "white";
            e.target.querySelector("svg").style.fill = "white";
          }}
        >
          <IoArrowUndoCircle size={35} className="me-1" />
        </button>

        <button
          className="btn btn-outline-success mx-2"
          onClick={handleNext}
          style={{
            backgroundColor: "transparent",
            border: "2px solid green",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "green";
            e.target.style.color = "white";
            e.target.querySelector("svg").style.fill = "white";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "green";
            e.target.querySelector("svg").style.fill = "green";
          }}
        >
          <IoArrowRedoCircle size={35} className="ms-1" />
        </button>
      </div>
    </div>
  );
};

export default Testimony;
