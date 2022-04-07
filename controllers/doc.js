const Doctor = require("../models/doctor");
const {
  accountVerificationEmail,
  resetPasswordEmail,
} = require("../utils/emailing.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_KEY = process.env.JWT_KEY;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_RESET_KEY = process.env.JWT_RESET_KEY;



/**
 * Sends verification email without storing user in DB
 * @param req {body: {name, email, password}}
 * @param res
 * @returns
 * {Promise<{
                success: string,
                result: {
                    accepted: [string],
                    rejected: [string],
                    envelopeTime: number,
                    messageTime: number,
                    messageSize: number,
                    response: string,
                    envelope: {
                        from: string,
                        to: [string]
                    },
                    messageId: string
               }
           }>}
 */
           exports.doctorSignup = async (req, res) => {
            const { name, email, phone, gender, dob, location, hospital_working_in } = req.body;
            const doctorExists = await Doctor.findOne({ email });
            if (doctorExists)
              return res
                .status(403)
                .json({ error: "User with the email already registered" });
          
            const token = jwt.sign({ name, email, phone, age, gender, dob, location, hospital_working_in }, JWT_KEY, {
              expiresIn: "30m",
            });
          
        
            const CLIENT_URL = "http://" + 'localhost:3000';
          
            const result = await accountVerificationEmail(email, token, CLIENT_URL).catch(
              (error) => {
                return res.status(400).send({ error: "Could not send email: " + error });
              }
            );
          
            return res.status(200).send({
              success: "Success. Mail sent!",
              result,
            });
          };


          /**
 * creates a new user and stores in db
 * @param req {params: {token: string}}
 * @param res
 * @returns {Promise<{result: string}>}
 */
exports.activateDocAccount = async (req, res) => {
    const { token } = req.params;
  
    if (token) {
      let decodedToken;
      try {
        decodedToken = await jwt.verify(token, JWT_KEY);
      } catch (err) {
        return res.json({
          error: "Link Expired or Invalid Link! Please try again.",
        });
      }
      const { name, email, phone, gender, dob, location, hospital_working_in } = decodedToken;
      const existingDoc = await Doctor.findOne({ email }).catch((err) => {
        return res.status(500).json({ error: err });                                                                                               
      });
      console.log(existingDoc);
      if (existingDoc) {
        return res
          .status(401)
          .json({ error: "User with the Email already registered!" });
      }
      const doctor = new Doctor({
        name,
        email,
        phone, 
        gender, 
        dob, 
        location, 
        hospital_working_in 
      });
      await doctor.save().catch((err) => {
        return res.status(500).json({ error: err });
      });
  
      return res.status(201).json({ result: "Signup Successful. Please login" });
    } else {
      console.log("Account activation error!");
      return res.status(400).json({ error: "Account activation failed!" });
    }
  };


  /**
 * @param req {body: {email, password}}
 * @param res
 * @returns 
 */
exports.docSignin = async (req, res) => {
    const { password } = req.body;
    const doctor = await Doctor.findOne({ email: req.body.email }).catch(
      (err) => {
        res.status(500).json({ error: err });
      }
    );
    if (!doctor.authenticate(password) || !doctor)
      return res.status(401).json({ error: "Email and password do not match" });
  
    const token = jwt.sign({ _id: doctor._id }, JWT_SECRET);
    res.cookie("t", token, { expire: new Date() + 9999 });
  
    const { _id, name, email } = patient;
    return res.status(200).json({ token, user: { _id, name, email } });
  };


  /**
 * generates token and sends an email
 * @param req {body: {email}}
 * @param res
 * @returns if success
 * <Promise{
 *     
       }
 * }>
 * @returns if error <Promise{error: string}>
 */
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
  
    const doctor = await Doctor.findOne({ email: email }).catch((err) => {
      return res.status(500).send({ error: err });
    });
    if (!doctor) {
      return res.status(404).send({ error: "Email is not registered." });
    }
    const token = jwt.sign({ _id: patient._id }, JWT_RESET_KEY, {
      expiresIn: "30m",
    });
    const CLIENT_URL = "http://" + req.headers.host;
    const result = await resetPasswordEmail(email, token, CLIENT_URL).catch(
      (err) => {
        return res.status(400).send({ error: err });
      }
    );
    return res.status(200).send({
      success: "Email sent succesfully !",
      result,
    });
  };

  /**
 * @param req {params: {token: string}}
 * @param res
 * @return if success {Promise<{
 *     result: string
 * }>}
 * @return if error {Promise<{
 *     error: string
 * }>}
 */
exports.gotoReset = async (req, res) => {
    const { token } = req.params;
  
    if (token) {
      let decodedToken;
      try {
        decodedToken = jwt.verify(token, JWT_RESET_KEY);
      } catch (e) {
        return res
          .status(401)
          .send({ error: "Link Expired or Invalid Link! Please try again." });
      }
  
      const { _id } = decodedToken;
      const doctor = await Doctor.findById(_id).catch((err) => {
        return res.status(500).send({ error: err });
      });
      if (!doctor) {
        return res.status(404).send({ error: "Email not registered" });
      }
      return res.json({ result: "Please redirect to reset password!" });
    } else return res.json({ error: "Failure" });
  };

  /**
 *
 * @param req {body: {_id: string, password: string}}
 * @param res
 * @return if success {Promise<{message: string}>}
 * @return if fail {Promise<{error: string}>}
 */
exports.resetPassword = async (req, res) => {
    const { password, _id } = req.body;
  
    const details = {
      password,
    };
  
    let doctor = await Doctor.findById(_id).catch((err) => {
      return res.status(500).send({ error: err });
    });
    doctor = lodash.extend(doctor, details);
    await doctor.save().catch((err) => {
      return res.status(500).send({ error: err });
    });
  
    return res.status(200).json({ message: "Upadted Successfully!" });
  };