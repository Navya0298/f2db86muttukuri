var express = require('express');
const pet_controller = require('../controllers/pet');
var router = express.Router();

// GET request for one pet. 
router.get('/pet/:id', pet_controller.pet_detail); 

/* GET home page. */
router.get('/', pet_controller.pet_view_all_Page);

module.exports = router;