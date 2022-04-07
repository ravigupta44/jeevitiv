const router = require("express").Router();
const UserDoctor = require("../models/doctorSignup");

router.post("/login/doctor/email", (req, res) => {
    const { email, password } = req.body;
    UserDoctor.findOne({ email: email }, (err, user) => {
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successfull", user: user });
        } else {
          res.send({ message: "Password didn't match" });
        }
      } else {
        res.send({ message: "User not registered" });
      }
    });
  });
  
  router.post("/doctorSignup", (req, res) => {
    const {
      name,
      email,
      password,
      gender,
      dob,
      telephone,
      address,
      pinCode,
      city,
      country,
    } = req.body;
    UserDoctor.findOne({ email: email }, (err, user) => {
      if (user) {
        res.send({ message: "User already registered" });
      } else {
        const user = new UserDoctor({
          name,
          email,
          password,
          gender,
          dob,
          telephone,
          address,
          pinCode,
          city,
          country,
        });
        user.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.send({ message: "Successfully Registered, Please login now." });
          }
        });
      }
    });
  });


  module.exports = router;