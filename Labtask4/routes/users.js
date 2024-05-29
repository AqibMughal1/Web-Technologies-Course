// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Registration route
router.get('/register', (req, res) => {
  res.render('register');
});


router.post('/register', async (req, res) => {
  try {
    const { name, email, password, contact, address } = req.body;
    const newUser = new User({ name, email, password, contact, address });
    await newUser.save();
    req.session.userId = newUser._id; // Log in the user after registration
    res.redirect('/');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await user.comparePassword(password)) {
    req.session.userId = user._id; // Log in the user
    res.redirect('/');
  } else {
    res.status(400).send('Invalid email or password');
  }
});

// Logout route
router.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});
  

module.exports = router;
