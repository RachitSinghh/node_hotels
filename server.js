const express = require("express");
const app = express();

const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("Welcome to our hotel");
});




// Import the router file

const personRoutes = require('./routes/PersonRoutes')
const menuItem = require('./routes/menuItemRoutes')

// use Router
app.use('/person',personRoutes); 
app.use('/menuItem', menuItem)


app.listen(3000, () => {
  console.log("listening on Port 3000");
});
