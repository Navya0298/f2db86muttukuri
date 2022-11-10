var express = require('express');
const pet_controlers= require('../controllers/pet');
var router = express.Router();

/* GET home page. */
router.get('/', pet_controlers.pet_view_all_Page);

module.exports = router;