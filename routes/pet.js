var express = require('express');
var router = express.Router();

var pet_controller = require('../controllers/pet');
/* GET home page. */
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
router.get('/',secured, pet_controller.pet_view_all_Page);
router.get('/detail',secured, pet_controller.pet_view_one_Page);
router.get('/create',secured, pet_controller.pet_create_Page);
router.get('/update',secured, pet_controller.pet_update_Page);
router.get('/delete',secured, pet_controller.pet_delete_Page);


module.exports = router;

