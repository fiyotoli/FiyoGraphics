import React, { useState } from 'react';
import { Accordion, Container, Row, Col, Image } from 'react-bootstrap';
import { FaQuestionCircle, FaPlus } from 'react-icons/fa'; // Importing the circular question mark and plus icons
import faqImage from '../assets/faq.jpg'; 
import "./Faq.css" // Adjust the path based on your project structure

const Faq = () => {
  const [activeKey, setActiveKey] = useState("0"); // Set the default active key to open the first accordion item

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key); // Toggle active key
  };

  return (
    <Container fluid className="mt-5 pt-5 ">
      <Row className="align-items-center">
        {/* Left Section: Image */}
        <Col lg={6} md={6} sm={12} className="mb-4">
          <Image src={faqImage} alt="FAQ" fluid rounded />
        </Col>

        {/* Right Section: FAQ Accordion */}
        <Col lg={6} md={6} sm={12}>
        <button className="btn mb-4 fw-bold  btn-outline-success shadow-sm">
Faq ?
</button>  <Accordion activeKey={activeKey} flush> {/* Added flush to remove borders */}
            {[
              {
                question: "What design software do you use?",
                answer: "I primarily use Adobe Creative Suite, including Photoshop, Illustrator, and InDesign. Depending on the project, I may also use tools like Figma or Canva.",
                eventKey: "0",
              },
              {
                question: "Can you create a custom logo for my brand?",
                answer: "Absolutely! I specialize in crafting unique and memorable logos tailored to your brand's identity and vision.",
                eventKey: "1",
              },
              {
                question: "What is your typical turnaround time for projects?",
                answer: "The turnaround time depends on the complexity of the project. For example, logos usually take about 3-5 business days, while larger projects like branding packages may take up to 2-3 weeks.",
                eventKey: "2",
              },
              {
                question: "Do you offer revisions for your designs?",
                answer: "Yes, I offer up to 3 rounds of revisions to ensure the final design meets your expectations.",
                eventKey: "3",
              },
              {
                question: "Can you design for both print and digital platforms?",
                answer: "Yes, I create designs optimized for both print and digital platforms, ensuring consistency across all mediums.",
                eventKey: "4",
              },
            ].map(({ question, answer, eventKey }) => (
              <Accordion.Item eventKey={eventKey} key={eventKey} style={{ border: 'none' }}> {/* Remove default border */}
                <Accordion.Header onClick={() => handleToggle(eventKey)} style={{ borderBottom: '1px solid #ddd' }}>
                  <FaQuestionCircle className="me-2 text-success" size={20} /> {/* Circular question mark icon in success color */}
                  <span className="flex-grow-1 text-start">{question}</span>
                  <FaPlus className="text-success" size={20} /> {/* Always show the plus icon */}
                </Accordion.Header>
                <Accordion.Body>
                  {answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
