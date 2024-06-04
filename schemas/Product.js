const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        default:true
    },
    

});

module.exports = mongoose.model("Product", productSchema);