const express = require("express")
const path = require('path');   
const bodyParser = require("body-parser");
const multer = require('multer');
const fs = require("fs")
const app = express();
app.use(bodyParser.json())
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, '/image')));
app.use(multer({ dest: 'images' }).single('myfile'));



// res.render("./views/end.ejs",{ data:{id:23} })

const route = require("./controllar/auth")
const auth = require("./controllar/authentic")
app.use("/",route)
app.use("/",auth)
// app.use("/",file)




const PORT = process.env.PORT || 3500;
app.listen(PORT , function() {
  console.log('App is running!',PORT);
});