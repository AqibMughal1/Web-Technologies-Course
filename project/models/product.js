const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productType: { type: String, required: true }, // e.g., "smartphone", "laptop"
  model: { type: String, required: true },        // e.g., "iPhone 14 Pro", "MacBook Pro"
  variant: String,                             // e.g., "128GB/Space Gray", "16GB/512GB SSD"
  ram: { type: Number, required: true },        // In gigabytes (GB)
  storage: { type: Number, required: true },    // In gigabytes (GB) or terabytes (TB)
  specs: [String],                            // Array of features/specs (e.g., "5G", "OLED display", "Touch Bar")
  modelYear: Number,                           // Year of release (e.g., 2023)
  chip: String,                               // e.g., "A16 Bionic", "M2 Pro"
  screenSize: Number    ,
  image: { type: String, required: true }                      // In inches, with decimals if needed
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
