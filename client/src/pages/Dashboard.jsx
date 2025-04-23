import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import { Button, Modal, Form } from "react-bootstrap";

const Dashboard = () => {
  const { products, loading, fetchProducts, addProduct, editProduct, deleteProduct } = useContext(AdminContext);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    date: "",
    image: null,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    if (editMode) {
      await editProduct(selectedProduct._id, form);
    } else {
      await addProduct(form);
    }

    resetForm();
    setShowModal(false);
  };

  const resetForm = () => {
    setFormData({ name: "", description: "", category: "", date: "", image: null });
    setEditMode(false);
    setSelectedProduct(null);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditMode(true);
    setFormData({
      name: product.name,
      description: product.description,
      category: product.category,
      date: product.date,
      image: null, // keep image optional unless re-uploaded
    });
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Dashboard</h2>
        <Button onClick={() => setShowModal(true)}>Add Product</Button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Date</th>
              <th>Image</th> {/* New column for image */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{p.category}</td>
                <td>{new Date(p.date).toLocaleDateString()}</td>
                <td>
                  {/* Display image */}
                  <img src={p.image} alt={p.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                </td>
                <td>
                  <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(p)}>
                    Edit
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => deleteProduct(p._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal for Add/Edit */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Edit Product" : "Add Product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" value={formData.description} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control name="category" value={formData.category} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image" onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
              {editMode ? "Update" : "Add"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Dashboard;
