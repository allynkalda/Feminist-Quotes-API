var express = require('express');
var router = express.Router();
var quotes = require('../data/quotes');

router.get('/', function(req, res, next) {
  res.status(200).send(quotes);
});

router.get('/random', function(req, res, next) {
  var randomNum = Math.floor(Math.random() * 100) + 1;
  res.status(200).send(quotes.quotes[randomNum]);
});

module.exports = router;
