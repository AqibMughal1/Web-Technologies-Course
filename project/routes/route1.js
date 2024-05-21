const express = require('express');
const router = express.Router();
const Product = require('../models/product');


// Render home page
router.get('/', async (req, res) => {
  try {
    const featuredProducts = await Product.find({}).limit(6); // Fetch 6 featured products
    res.render('home/index', { featuredProducts });
  } catch (e) {
    console.log(e);
    res.send('Error fetching featured products');
  }
});

// Render products page
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.render('product/products', { products });
  } catch (e) {
    console.log(e);
    res.send('Error fetching products');
  }
});

// Render product description page
router.get('/productDescription/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('product/productDescription', { product });
  } catch (e) {
    console.log(e);
    res.send('Error fetching product description');
  }
});

// Render new product form page
router.get('/products/new', (req, res) => {
  res.render('product/new');
});

// Handle new product form submission
router.post('/products', async (req, res) => {
  try {
    const { productType, model, variant, ram, storage, specs, modelYear, chip, screenSize, mainImage, image1, image2, image3 } = req.body;
    const newProduct = new Product({
      productType,
      model,
      variant,
      ram,
      storage,
      specs: specs ? specs.split(',').map(spec => spec.trim()) : [], // Convert comma-separated string to array
      modelYear,
      chip,
      screenSize,
      image: mainImage, // Use mainImage for product's main image
      additionalImages: [image1, image2, image3].filter(Boolean) // Filter out empty strings
    });
    console.log(newProduct);
    await newProduct.save();
    res.redirect('/products');
  } catch (e) {
    console.log(e);
    res.send('Error adding product');
  }
});

module.exports = router;
