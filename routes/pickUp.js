
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User');

// GET ALL USERS
router.get('/users', function(req, res, next) {
    User.find(function(err, users) {
      if (err) {
        return next(err);
      }
      res.json(users);
    });
});

// SAVE USER
router.post('/users',function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) {
      return next(err);
    }
    res.json(post);
  });
});
module.exports = router;
