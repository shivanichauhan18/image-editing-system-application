// let express = require("express")
// let router = express.Router()

// var foo = require('./view/shivi.json');

// const path = "/view/shivi.json"
// const fs = require('fs')
// router.get("/shiv",(req,res)=>{
//     fs.readFile(path, "utf8", (err, data) => {
//         if (err) {
//           throw err;
//         }
  
//         res.send(JSON.parse(data));
//     })
// })
// module.exports = router 

const express = require('express');
const bodyParser = require('body-parser');
const path = require("path")
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/exam",(req,res)=>{
  res.sendFile(path.join(__dirname + "/view/index.html"))

})

app.post('/example', (req, res) => {
  res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});

