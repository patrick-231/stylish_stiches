const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const colors = require('colors');
require('dotenv').config();
const connectDB = require('./dbinit');
const user = require('./routes/user')
const product = require('./routes/product')


const app = express();

app.use(express.json());
app.use(cors());

connectDB()
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello from Stylish Stiches Backend')
});
// routes
app.use("/user", user)
app.use("/products", product)

app.listen(PORT, () =>{
    console.log(`listening on http://localhost:${PORT}`.cyan)
});