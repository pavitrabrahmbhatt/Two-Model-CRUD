const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  productName:String,
  prodcutPrice:String
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;