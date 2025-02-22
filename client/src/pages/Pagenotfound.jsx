import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout  title="page not found - Ecommerce App">
      <div className="pnf d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <h1 className="pnf-title" style={{ fontSize: '10rem' }}>404</h1>
        <h2 className="pnf-heading">Oops! Page Not Found</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
