const Product = require('../schemas/Product');

// Get all products
getAllProducts = async (req, res) => {
    try {
        
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single product
getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create a new product
createProduct = async (req, res) => {
    const { name, new_price, old_price, description, category, image, color, id, available } = req.body;
    const product = new Product({
        name,
        new_price,
        old_price,
        description,
        category,
        image,
        color,
        id,
        available,
    });
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a product
updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const { name, new_price, old_price, description, category, image, color, id, available } = req.body;
        product.name = name || product.name;
        product.new_price = new_price || product.new_price;
        product.old_price = old_price || product.old_price;
        product.description = description || product.description;
        product.category = category || product.category;
        product.image = image || product.image;
        product.color = color || product.color;
        product.id = id || product.id;
        product.available = available || product.available;
        const updatedProduct = await product.save();
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a product
deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};