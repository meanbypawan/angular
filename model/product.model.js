const mongoose = require("mongoose");
// Mongoose Schema :- Represent the
//structure of document
// Monoose Model :- It represent the data
// Mongoose schema less NoSQL
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String
    }
},
{versionKey: false});
module.exports = mongoose.model("product",productSchema);
