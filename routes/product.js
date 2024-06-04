const express = require('express');

const {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/product');

const app = express.Router();

// Get all products
app.get('/allproducts', getAllProducts);

// Get a single product
app.get('/:id', getProduct);

// Create a new product
app.post('/allproducts', createProduct);

// Update a product
app.put('/:id', updateProduct);

// Delete a product
app.delete('/:id', deleteProduct);

module.exports = app;