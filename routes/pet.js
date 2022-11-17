var express = require('express');
var router = express.Router();

var pet_controller = require('../controllers/pet');
/* GET home page. */

router.get('/', pet_controller.pet_view_all_Page);
router.get('/detail', pet_controller.pet_view_one_Page);
router.get('/create', pet_controller.pet_create_Page);
router.get('/update', pet_controller.pet_update_Page);
router.get('/delete', pet_controller.pet_delete_Page);


module.exports = router;

