import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddProduct from "./pages/addProduct";
import { ToastContainer } from "react-toastify";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <button className="btn btn-success" type="button" disabled>
          <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
          <span className="ms-2">Loading...</span>
        </button>
      </div>
    );
  }

  return (
    <>
     <ToastContainer />
      <Navbar />
      <Routes>
        {/* Admin routes */}
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes> {/* ✅ Fixed closing tag */}

      <Footer />

      {/* Scroll-Up Button */}
      <ScrollUpButton />
    </>
  );
};

// Scroll-Up Button Component
const ScrollUpButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showScroll && (
      <button
        className="btn btn-success position-fixed bottom-0 end-0 m-4"
        onClick={scrollToTop}
        style={{ zIndex: 1000 }}
      >
        <IoIosArrowUp size={24} />
      </button>
    )
  );
};

export default App;
