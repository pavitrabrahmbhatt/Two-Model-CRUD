const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userName:String,
  Email:String
});

const User = mongoose.model('User', userSchema);

module.exports = User 