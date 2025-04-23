import express from 'express';
import { 
  listProducts, 
  addProduct, 
  getProductById, 
  getRelatedProducts,
  editProduct,       // newly added
  deleteProduct      // newly added
} from '../controllers/productController.js';
import upload from '../middleware/multer.js'; 
// Adjust the path based on your structure

const productRouter = express.Router();

productRouter.post('/add', upload.single('image'), addProduct); 
productRouter.get('/list', listProducts);
productRouter.get('/:id', getProductById);  // Route to get product by ID
productRouter.get('/related/:category', getRelatedProducts);

// Newly added routes
productRouter.put('/edit/:id', upload.single('image'), editProduct);  // Route for editing a product
productRouter.delete('/delete/:id', deleteProduct);  // Route for deleting a product

export default productRouter;
