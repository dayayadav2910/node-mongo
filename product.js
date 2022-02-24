const mongoose =  require('mongoose');
const productschema = new mongoose.Schema({
    name:String,
    brand : String,
    price:Number,
})
module.exports = mongoose.model('products' ,productschema); 