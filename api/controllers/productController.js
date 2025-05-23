import productModel from "../models/productModel.js";
import { v2 as cloudinary } from "cloudinary";

const addProduct = async (req, res) => {
    try {
        const { name, description, date, category } = req.body;
        const imageFile = req.file;

        if (!name || !description || !date || !category) {
            res.json({ success: false, message: "missing details" });
        }

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
        let imageUrl = imageUpload.secure_url;

        const doctorData = {
            name,
            description,
            image: imageUrl,
            category,
            date: Date.now()
        };

        const newDoctor = new productModel(doctorData);
        await newDoctor.save();
        res.json({ success: true, message: "product added" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// function for list product
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find(); 
        res.json({ success: true, products }); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message }); 
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.json({ success: true, product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get related products by category
const getRelatedProducts = async (req, res) => {
    try {
        const { category } = req.params;

        if (!category) {
            return res.status(400).json({ message: 'Category is required' });
        }

        const relatedProducts = await productModel.find({ category });

        if (relatedProducts.length === 0) {
            return res.status(404).json({ message: 'No related products found' });
        }

        res.json({ relatedProducts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Edit product
const editProduct = async (req, res) => {
    try {
        const { name, description, date, category } = req.body;
        let updatedData = { name, description, date, category };

        if (req.file) {
            const imageUpload = await cloudinary.uploader.upload(req.file.path, { resource_type: 'image' });
            updatedData.image = imageUpload.secure_url;
        }

        const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, updatedData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.json({ success: true, message: "Product updated", product: updatedProduct });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete product
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.json({ success: true, message: "Product deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export {
    listProducts,
    addProduct,
    getProductById,
    getRelatedProducts,
    editProduct,
    deleteProduct
};
