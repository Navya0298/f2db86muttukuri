var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pet', { title: 'Search Results by pet breed' });
});

module.exports = router;