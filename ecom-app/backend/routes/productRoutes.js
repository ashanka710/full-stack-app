const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get all products
router.get("/", async(req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Add a product
router.post("/add", async(req, res) => {
    const { name, price, imageUrl } = req.body;
    const product = new Product({ name, price, imageUrl });
    await product.save();
    res.json({ message: "Product added successfully" });
});

module.exports = router;