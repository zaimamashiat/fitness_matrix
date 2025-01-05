const Product = require('../models/ProductModel');

exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create product' });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const { category, minPrice, maxPrice, search } = req.query;
        let filter = {};

        if (category && category !== 'All') filter.category = category;
        if (minPrice && maxPrice) filter.price = { $gte: minPrice, $lte: maxPrice };
        if (search) filter.name = { $regex: search, $options: 'i' };

        const products = await Product.find(filter);
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
};

// Fetch multiple products by IDs
exports.getProductsByIds = async (req, res) => {
    try {
        const { ids } = req.body; // Array of product IDs
        if (!Array.isArray(ids)) {
            return res.status(400).json({ message: "Invalid input. Expected an array of IDs." });
        }

        const products = await Product.find({ _id: { $in: ids } }); // Fetch products in one query
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Error fetching products" });
    }
};


exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ error: 'Product not found' });
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update product' });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ error: 'Product not found' });
        res.json({ message: 'Product deleted', product: deletedProduct });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
};
