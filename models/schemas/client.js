const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var ClientSchema = new Schema({
  name: String,
  tel: Number,
  mail: String,
  address: String,
  info: String,
  createAt:{
    type: Date,
    default: Date.now()
  }
})

ClientSchema.statics = {
  fetch: function(cb) {
    return this
      .find({})
      .sort({'meta.creatAt':-1})         // _id 中包含了事件的算法
      .exec(cb)
  },

}

module.exports = ClientSchema
