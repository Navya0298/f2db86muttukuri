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

// for a specific pet. 
exports.pet_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await pet.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};

// Handle Costume update form on PUT. 
exports.pet_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await pet.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.pet_type)  
               toUpdate.pet_type = req.body.pet_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.breed) toUpdate.breed = req.body.breed; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle pet delete on DELETE. 
exports.pet_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await pet.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};

// Handle a show one view with id specified by query

exports.pet_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
      result = await pet.findById(req.query.id)
      res.render('pet-detail',
        { title: 'pet Detail', toShow: result });
    }
    catch (err) {
      res.status(500)
      res.send(`{'error': '${err}'}`);
    }
  };
  
  // Handle building the view for creating a pet.
  // No body, no in path parameter, no query.
  // Does not need to be async
  
  exports.pet_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('pet-create', { title: 'pet Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
  };
  // Handle building the view for updating a pet.
  // query provides the id
  
  exports.pet_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await pet.findById(req.query.id)
        res.render('pet-update', { title: 'pet Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
  };
  // Handle a delete one view with id from query
  
  exports.pet_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await pet.findById(req.query.id)
        res.render('pet-delete', { title: 'pet Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
  };



 