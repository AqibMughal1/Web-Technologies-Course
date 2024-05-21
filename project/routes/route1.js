const express = require('express');
const router = express.Router();
const Product = require('../models/product'); // Adjust the path as necessary

router.get('/', (req, res) => {
  res.render('home/index');
});

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.render('product/products', { products });
  } catch (e) {
    console.log(e);
    res.send('Error fetching products');
  }
});

router.get('/productDescription/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('product/productDescription', { product });
  } catch (e) {
    console.log(e);
    res.send('Error fetching product description');
  }
});

module.exports = router;
