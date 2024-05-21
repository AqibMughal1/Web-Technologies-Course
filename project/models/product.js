const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productType: { type: String, required: true },
  model: { type: String, required: true },
  variant: String,
  ram: { type: Number, required: true },
  storage: { type: Number, required: true },
  specs: [String],
  modelYear: Number,
  chip: String,
  screenSize: Number,
  image: { type: String, required: true }, // Main image URL
  additionalImages: [String] // Additional images URLs, optional
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
