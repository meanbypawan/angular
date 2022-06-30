const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRouter = require('./routes/product.router');
const bodyParser = require('body-parser'); 
mongoose.connect("mongodb://localhost:27017/productDatabase",(err)=>{
    if(!err){
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended: true}));

     // http://localhost:3000/product/save
     app.use("/product",productRouter);
     app.listen(3000,()=>{
       console.log("server running...");
     })
    }
    else
      console.log("Mongoose Connection Error..");
})
