const mongoose = require("mongoose");
const userDoctorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    dob: String,
    telephone: String,
    address: String,
    pinCode: String,
    city: String,
    country: String,
  });
//   const User = new mongoose.model("User", userSchema);
module.exports = mongoose.model("UserDoctor", userDoctorSchema);
