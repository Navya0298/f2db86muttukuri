var pet = require('../models/pet'); 
// List of all Costumes 
exports.pet_list = async function(req, res) { 
    try{ 
        thePet = await pet.find(); 
        res.send(thePet); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// List of all pets 
//exports.pet_list = function(req, res) { 
  //  res.send('NOT IMPLEMENTED: pet list'); 
//}; 
 
// for a specific pets. 
exports.pet_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: pet detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.pet_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: pet create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.pet_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: pet delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.pet_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: pet update PUT' + req.params.id); 
}; 