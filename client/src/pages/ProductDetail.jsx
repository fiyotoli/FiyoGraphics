import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/product/${id}`);
        setProduct(response.data.product);

        if (response.data.product.category) {
          fetchRelatedProducts(response.data.product.category);
        }

        setLoading(false);
      } catch (err) {
        setError('Error fetching product details');
        setLoading(false);
      }
    };

    const fetchRelatedProducts = async (category) => {
      try {
        const response = await axios.get(`http://localhost:4000/api/product/related/${category}`);
        setRelatedProducts(response.data.relatedProducts || []);
      } catch (err) {
        console.error('Error fetching related products:', err);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4" style={{ fontWeight: 'bold' }}>{product.name}</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" style={{ height: 'auto', objectFit: 'cover' }} />
        </div>
        <div className="col-md-6">
          <h4>Description</h4>
          <p>{product.description}</p>
          <p><strong>Date Added:</strong> {new Date(product.date).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="mt-5">
        <h3>Related Products</h3>
        <div className="row">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((relatedProduct) => (
              <div className="col-md-4 mb-4" key={relatedProduct._id}>
                <div className="card shadow-sm">
                  <img src={relatedProduct.image} alt={relatedProduct.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title">{relatedProduct.name}</h5>
                    <p className="card-text text-muted">{new Date(relatedProduct.date).toLocaleDateString()}</p>
                    <p className="card-text">{relatedProduct.description}</p>
                    <Link
                      to={`/product/${relatedProduct._id}`} // Navigate to correct product
                      className="btn btn-success"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to top when clicked
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No related products found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
