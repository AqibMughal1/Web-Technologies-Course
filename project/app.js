const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const route1 = require('./routes/route1');
const path = require('path');

const app = express();

const dbUrl = 'mongodb://localhost:27017/apple-resellers';

mongoose.connect(dbUrl, {}).then(() => {
  console.log('MongoDB connection open');
}).catch(err => {
  console.log('MongoDB connection error:', err);
});

app.use(express.static(path.join(__dirname, 'public')));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', route1);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
