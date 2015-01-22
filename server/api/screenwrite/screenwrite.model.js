'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ScreenwriteSchema = new Schema({
  id: String,
  body: String,
  dob: { type: Date, default: Date.now },
  edits: [{dob:{type:Date,default:Date.now}}],
  ratings: [{dob:{type:Date,default:Date.now},stars:{type:Number,min:1,max:10}}],
  publish: Boolean
});

module.exports = mongoose.model('Screenwrite', ScreenwriteSchema);
