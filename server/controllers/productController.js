const Product = require('../models/productModel');

// Fetch all products
exports.getProducts = async (req, res) => {
  const { tags } = req.query;

  try {
    const query = tags ? { tags: { $in: tags.split(',') } } : {};
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a product
exports.createProduct = async (req, res) => {
  const { name, description, price, images, tags, stock } = req.body;

  try {
    const product = await Product.create({ name, description, price, images, tags, stock });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
