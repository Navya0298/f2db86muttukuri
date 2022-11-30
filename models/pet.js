const mongoose = require("mongoose")

const petSchema = mongoose.Schema({

    pet_type: {type: String,required: [true, 'pet type cannot be empty']},

    cost: Number,

    breed: {type: String,required: [true, 'pet breed cannot be empty']},

})

//The first argument to the model function is going to be the name of the collection of documents that will be stored in your MongoDB.

module.exports = mongoose.model("pets",

    petSchema)