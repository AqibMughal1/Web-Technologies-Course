const express = require("express");
const app = express();
const ejsMate = require('ejs-mate');
const route1 = require("./routes/route1");
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use("/", route1);


app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");;
})