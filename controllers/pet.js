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
exports.pet_create_post = async function(req, res) { 
    try{ 
        thePet = await pet.find(); 
        res.render('pet', { title: 'pet Search Results', results: thePet }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
// Handle Costume delete form on DELETE. 
exports.pet_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: pet delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.pet_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: pet update PUT' + req.params.id); 
}; 
// VIEWS 
// Handle a show all view 
exports.pet_view_all_Page = async function(req, res) { 
    try{ 
        thePet = await pet.find(); 
        res.render('pet', { title: 'Pet Search Results', results: thePet }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.pet_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new pet(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"pet_type":"dog", "breed":"doberman", "cost":7000} 
    document.pet_type = req.body.pet_type; 
    document.breed = req.body.breed; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 