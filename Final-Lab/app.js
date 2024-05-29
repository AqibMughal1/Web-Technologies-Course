const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const route1 = require('./routes/route1');
const path = require('path');
const methodOverride = require('method-override');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const app = express();


app.use(express.urlencoded({extended: true}));

const dbUrl = 'mongodb://localhost:27017/apple-resellers';

mongoose.connect(dbUrl, {}).then(() => {
  console.log('MongoDB connection open');
}).catch(err => {
  console.log('MongoDB connection error:', err);
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(session({
  secret: 'yourSecretKey', 
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: dbUrl }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  }
}));


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
  res.locals.currentUser = req.session.userId;
  next();
});



const userRoutes = require('./routes/users');
app.use('/', userRoutes);


app.use('/', route1);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
