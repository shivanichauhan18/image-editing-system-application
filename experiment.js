const express = require('express');
let jwt = require('jsonwebtoken');
var app = express();


app.post('/api/posts',verifyToken,(req,res,next)=>{
    jwt.verify((req.token),"SECRET_KEY",(err,authData)=>{
       if(err){
           res.sendStatus(403);
        }else{
        res.json({
        message:"post created....",
        authData
    });
    }
    })
});

app.post("/login",(req,res,next)=>{
    const user={
        id:1,
        name:"sikha chowla",
        email:"sikhic1022@navgurukul.org"
    }
    jwt.sign(user,"SECRET_KEY",(err,token)=>{
        res.json({
            token:"Bearer " + token
        })
    })
})


///Token verification function.
function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(' ')[1];
        req.token=bearerToken; 
        next();

    }else{
       res.sendStatus(403);
    }
}



app.listen(5000,()=>{
    console.log("server started on port 5000")
})