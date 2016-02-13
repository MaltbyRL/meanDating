'use strict';

var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var JWT_SECRET = process.env.JWT_SECRET;

var User;

var userSchema = new mongoose.Schema({
  fireBId: {type:String},
  username: {type:String},
  email: {type: String},

});

userSchema.statics.isLoggedIn = function(req, res, next){
  var token = req.cookies.mytoken;
  if(!token) return res.status(401).send({error: `Failed: ${err}`})
  try{
    var payload = jwt.decode(token, JWT_SECRET);
  }
  catch(err){ return res.status(401).send({error: `Failed ${err}`})}
  req.token = payload;
  console.log("isLoggedIn", req.token);
  next();
}

// instance method
userSchema.methods.generateToken = function() {

  var userId = {
    fireBId: this.fireBId,
    _id: this._id
  };

  console.log('pay load is: ', userId);

  var token = jwt.encode(userId, JWT_SECRET);

  return token;
};

User = mongoose.model('User', userSchema);

module.exports = User;
