const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
  storeName:String,
  Location:String
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store