

'use strict';

var Firebase = require('firebase');
var express = require('express');
var router = express.Router();

var authMiddleware = require('../authCo/auth');

var User = require('../models/users');
var Update = require('../models/update');

var ref = new Firebase("https://ricksloginapp.firebaseio.com/");

router.get('/signed', function(req,res){
  var token = req.cookies.mytoken;
  if(!token) return res.send({token: false})
  res.send({token: true})

})

router.post('/update', function(req, res) {
  var name = req.body.name;
  var description = req.body.about;

  console.log("req:", name)
  console.log("req:", description)

  Update.create({name: name, description: description,}, function(err, newInfo) {
    if(err) return res.status(400).send(err);
      console.log("newInfo:",newInfo)
       res.send("done");
     });
})

router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) return console.log("err:", err)
    console.log("Users", users)
    var userArr = []
    users.map(function(users) {
      userArr.push(users);
    });
    console.log("userArr", userArr)
    res.send(userArr)
  });
});

router.post('/register', function(req, res, next) {
	console.log('req.body', req.body)
  ref.createUser(req.body, function(err, userData) {
    if(err) return res.status(400).send("err",err);
    var fireBId= userData.uid
    var email = req.body.email
    console.log("fireBaseID",fireBId)
    console.log("Routes/req", req.body);
 User.create({fireBId: fireBId, email: email,}, function(err, newUser) {
   if(err) return res.status(400).send(err);
      res.send();
    });
  });
});

router.post('/login', function(req, res, next) {
	console.log("Routes/users.js", req.body)
  ref.authWithPassword(req.body, function(err, data) {
    console.log("data", data);
    if(err) return res.status(400).send(err);
    User.findOne({fireBId: data.uid}, function(err, user) {
    	if (err) return console.log("err:", err)
      var token = user.generateToken();
      console.log('token', token);

      res.cookie('mytoken', token).send();
    });
  });
});

router.get('/logout', function(req, res, next) {
	console.log('Cookie be gone!!')

  res.clearCookie('mytoken').send('Success');
});


module.exports = router;
