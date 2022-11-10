var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var pet_controller = require('../controllers/pet'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/pet', pet_controller.pet_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/pet/:id', pet_controller.pet_delete); 
 
// PUT request to update Costume. 
router.put('/pet/:id', pet_controller.pet_update_put); 
 
// GET request for one Costume. 
router.get('/pet/:id', pet_controller.pet_detail); 
 
// GET request for list of all Costume items. 
router.get('/pet', pet_controller.pet_list); 
 
module.exports = router; 
 