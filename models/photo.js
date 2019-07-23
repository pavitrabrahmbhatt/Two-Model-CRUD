const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  productName:String,
  prodcutPrice:String
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;