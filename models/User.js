
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  username: String,
  password: String

}, {timestamp: true});

module.exports = mongoose.model('User', UserSchema);
