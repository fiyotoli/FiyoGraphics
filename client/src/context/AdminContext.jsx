import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

// Create the AdminContext
export const AdminContext = createContext(); 

export const AdminContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/product/list`);
      if (data.success) {
        setProducts(data.products);  // Set products data in context
      } else {
        console.error(data.message);  // Handle error message
      }
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  // Add new product
  const addProduct = async (formData) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/product/add`, formData);
      if (data.success) {
        toast.success("Product added");
        fetchProducts();  // Refresh the product list
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Failed to add product", error);
      toast.error("Failed to add product");
    }
  };

  // Edit product
  const editProduct = async (id, formData) => {
    try {
      const { data } = await axios.put(`${backendUrl}/api/product/edit/${id}`, formData);
      if (data.success) {
        toast.success("Product updated");
        fetchProducts();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Failed to edit product", error);
      toast.error("Failed to update product");
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      const { data } = await axios.delete(`${backendUrl}/api/product/delete/${id}`);
      if (data.success) {
        toast.success("Product deleted");
        fetchProducts();  // Refresh the product list
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Failed to delete product", error);
      toast.error("Failed to delete product");
    }
  };

  const value = {
    products,
    loading,
    fetchProducts,
    addProduct,     // new
    editProduct,    // new
    deleteProduct,  // new
    backendUrl
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
