const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const session = require('express-session');


function requireAuth(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/login');
  }
};


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
router.get('/product/:id', async (req, res) => {
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


router.get('/contactus', (req, res) => {
  res.render('contactUs/contactus');
});

router.get('/aboutus', (req, res) => {
  res.render('contactUs/aboutus');
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

router.get('/product/:id/edit', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render("product/edit", {product});
});

router.put('/products/:id', async (req, res) => {
  try {
    const { productType, model, variant, ram, storage, specs, modelYear, chip, screenSize, mainImage, additionalImages, price } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { productType, model, variant, ram, storage, specs, modelYear, chip, screenSize, mainImage, additionalImages, price }, { new: true });
    res.redirect(`/products/${updatedProduct._id}`);
  } catch (error) {
    console.log(error);
    res.send('Error updating product');
  }
});

router.delete('/product/:id', async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  res.redirect('/')
});

module.exports = router;
