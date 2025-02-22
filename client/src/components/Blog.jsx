import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa'; // Importing the date icon
import blogData from '../assets/data.js'; // Import the blog data
import './Portfolio.css'; // Custom CSS for hover effects and styling

const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState(6); // Number of items visible at a time

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  return (
    <Container className="mt-5 pt-5  text-center" id="blog">
     <button className="btn  mt-5 btn-outline-success shadow-sm">
 Blog
</button>
      {/* Blog Items */}
      <Row>
        {blogData.slice(0, visibleItems).map((item) => (
          <Col key={item.id} md={6} lg={4} className="mb-4 d-flex align-items-stretch">
            <Card
              className="h-100 shadow-sm w-100 d-flex flex-column align-items-center"
              style={{
                border: "none",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <div className="image-container mb-3">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  className="portfolio-image"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <Card.Body
                className="d-flex flex-column align-items-center justify-content-between"
                style={{
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <Card.Title
                  className="font-weight-bold text-success"
                  style={{ fontSize: "1.25rem" }}
                >
                  {item.title}
                </Card.Title>
                <small className="d-flex align-items-center mb-2">
                  <FaCalendarAlt className="me-1 text-success" />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </small>
                <Card.Text className="text-muted mb-3">
                  {item.description.length > 50
                    ? `${item.description.slice(0, 50)}...`
                    : item.description}
                </Card.Text>
                <Button
                  variant="success"
                  className="btn-hover"
                  onClick={() => handleShowModal(item)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* More Button */}
      {visibleItems < blogData.length && (
        <div className="text-center mt-4">
          <Button variant="success" onClick={handleShowMore}>
            More
          </Button>
        </div>
      )}
      {/* Modal for Item Details */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-success font-weight-bold">
            {selectedItem?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex">
          <div style={{ flex: 1 }}>
            <img
              src={selectedItem?.image}
              alt={selectedItem?.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "15px",
                objectFit: "contain",
              }}
            />
          </div>
          <div style={{ flex: 1, marginLeft: "20px" }}>
            <h5 className="text-success font-weight-bold">{selectedItem?.title}</h5>
            <p className="text-muted">{selectedItem?.description}</p>
            <small className="text-muted">
              <FaCalendarAlt className="me-1 text-success" />
              <span>{selectedItem?.date}</span>
            </small>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Blog;
