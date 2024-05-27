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
app.get('/products', getAllProducts);

// Get a single product
app.get('/products/:id', getProduct);

// Create a new product
app.post('/products', createProduct);

// Update a product
app.put('/products/:id', updateProduct);

// Delete a product
app.delete('/products/:id', deleteProduct);

module.exports = app;