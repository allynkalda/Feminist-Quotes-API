var express = require('express');
var router = express.Router();
var quotes = require('../data/quotes');

router.get('/', function(req, res, next) {
  res.status(200).send(quotes);
});

module.exports = router;
