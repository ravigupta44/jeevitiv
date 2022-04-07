const mongoose = require('mongoose');


const demoSchema = new mongoose.Schema({

  firstName: String,
  lastName: String,  
  email: String,
  phone: Number,
  person: String

})


module.exports = mongoose.model("Demo", demoSchema) 