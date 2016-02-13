'use strict';

var mongoose = require('mongoose');

var infoSchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  // picture: { type: String }
});

var Info = mongoose.model('Info', infoSchema);

module.exports = Info;
