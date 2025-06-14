import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdminContext } from '../context/AdminContext';
import { Link } from 'react-router-dom';

function Portfolio() {
  const { products, loading, fetchProducts } = useContext(AdminContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (filter === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === filter));
    }
    setCurrentPage(1);
  }, [filter, products]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container  text-center mt-5 pt-5" id="portfolio">
     <button className="btn mb-4 mt-5 btn-outline-success shadow-sm">
Portfolio
</button>
      <div className="text-center mb-4 ">
        {['', 'infographic', 'poster', 'card', 'flyer', 'logo', 'branding'].map((category, index) => (
          <button 
            key={index} 
            className={`btn mx-2 my-1 ${filter === category ? 'btn-success' : 'btn-outline-success'}`} 
            onClick={() => setFilter(category)}
          >
            {category === '' ? 'Show All' : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="row">
        {currentItems.length === 0 ? (
          <p>No design available</p>
        ) : (
          currentItems.map((product, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: 'auto', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">{product.date} <span className="mx-2"></span> {product.time}</p>
                   </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="d-flex justify-content-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} className={`btn mx-1 ${currentPage === i + 1 ? 'btn-success' : 'btn-outline-success'}`} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button className="btn btn-outline-success mx-2" onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </button>
        )}
      </div>
      {showModal && selectedProduct && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.name}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="img-fluid mb-3" />
                <p>{selectedProduct.description}</p>
                <p><strong>Date:</strong> {selectedProduct.date} <strong>Time:</strong> {selectedProduct.time}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
