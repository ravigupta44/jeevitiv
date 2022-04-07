const mongoose = require('mongoose');
const uuidv1 = require('uuidv1');
const crypto =  require('crypto');


const patientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  aadharno: String,
  hashed_password: String,
  salt : String,
  
  // photoid: {
  //   data: Buffer,
  //   contentType: String
  // },
  
  
  age: Number,
  bp: Number,
  gender: String,
  weight: Number,
  height: Number,
  sugarLevel: Number,
  glucoseLevel: Number,
  history: String,
  allergies: String,

  summary: [{
    doctor: {
      type: mongoose.Schema.ObjectId,
      ref:"Group"
    },
    description: String,
  }],

  // reports:  [{           
  //   data: Buffer,
  //   contentType: String
  // }],

  illness: String,
  treatment: String,

  immunization: [{
    name: String,
    year: String
  }],

})

patientSchema.virtual('password')
.set(function(password) {
    this._password = password
    this.salt = uuidv1()
    this.hashed_password=this.encryptPassword(password)
})
.get(function(){
    return this._password
})


patientSchema.methods = {
    authenticate: function(plainText)
    {
        return this.encryptPassword(plainText)==this.hashed_password;
    },

    encryptPassword: function(password)
    {
        if(!password)
            return "";
        try 
        {
            return crypto.createHmac('sha1',this.salt)
            .update(password)
            .digest('hex');
        }
        catch(err)
        {
            return "";
        }
    }
}


module.exports = mongoose.model("Patient", patientSchema) 
