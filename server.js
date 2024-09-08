const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('.productController');
const orderRoutes = require('.orderController');

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware
app.use(express.json());
app.use(express.static('style.css'main.js'index.html'product.html'cart.html'));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
