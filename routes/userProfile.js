'use strict';

var express = require('express');
var router = express.Router();
var multer = require('multer');
var mongoose = require('mongoose');
var User = require('../models/users.js');
var Update = require('../models/update');


router.get('/', function(req, res) {
  console.log("router get");
  Update.find({}, function(err, users) {
    if (err) return console.log("err:", err)
    console.log("Users", users)
    var userProfile = []
    userProfile.map(function(users) {
      userProfile.push(users);
    });
    console.log("userProfile", userProfile)
    res.send(userProfile)
  });
});

router.post('/', function(req, res) {
  User.create(req.body, function(err, user) {
    if (err) console.log('err:', err)
    else {
      console.log("user:", user);
      res.send(user);
    }
  });
});

module.exports = router;
