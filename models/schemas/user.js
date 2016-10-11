var mongoose = require('mongoose');
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId


var UserSchema = new Schema({
  name: String,
  password: String,
})

module.exports = UserSchema
