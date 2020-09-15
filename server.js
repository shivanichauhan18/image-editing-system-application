const express = require("express")
const path = require('path');   
const bodyParser = require("body-parser");
const fs = require("fs")
var jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json())
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use( express.static( "images" ) );

app.use(express.static(path.join(__dirname, '/image')));

const route = require("./controllar/auth")
const auth = require("./controllar/authentic")
app.use("/",route)
app.use("/",auth)




const PORT = process.env.PORT || 3500;
app.listen(PORT , function() {
  console.log('App is running!',PORT);
});