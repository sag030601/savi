const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  images: [{ type: String }], // Array of image URLs
  tags: [{ type: String }], // Array of tags
  stock: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
