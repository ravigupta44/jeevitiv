const Patient = require("../models/patient");
const Newsletter = require("../models/newsletter");
const Demo = require("../models/demo");
const unirest = require("unirest");
const {
  requestDemo,
  needHelpEmail,
  accountVerificationEmail,
  resetPasswordEmail,
} = require("../utils/emailing.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_KEY = process.env.JWT_KEY;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_RESET_KEY = process.env.JWT_RESET_KEY;

const lodash = require("lodash");
const patient = require("../models/patient");
const fast2sms = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");

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
exports.patientSignup = async (req, res) => {
  const { name, email, phone, age, gender, city } = req.body;
  const patientExists = await Patient.findOne({ email });
  if (patientExists)
    return res
      .status(403)
      .json({ error: "User with the email already registered" });

  const token = jwt.sign({ name, email, phone, age, gender, city }, JWT_KEY, {
    expiresIn: "30m",
  });


  // This should be a front end Url(3000 would be replace with frontend host url)
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
exports.activatePatientAccount = async (req, res) => {
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
    const { name, email, phone, age, gender, city} = decodedToken;
    const existingPatient = await Patient.findOne({ email }).catch((err) => {
      return res.status(500).json({ error: err });                                                                                               
    });
    console.log(existingPatient);
    if (existingPatient) {
      return res
        .status(401)
        .json({ error: "User with the Email already registered!" });
    }
    const patient = new Patient({
      name,
      email,
      phone,
      age,
      gender,
      city
    });
    await patient.save().catch((err) => {
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
 * @returns <Promise{
 *     token: string,
 *     user: {
 *         _id: string,
 *         name: string,
 *         email: string
 *     }
 * }>
 * if error returns <Promise{
 *     error: string
 * }>
 */
exports.patientSignin = async (req, res) => {
  const { password } = req.body;
  const patient = await Patient.findOne({ email: req.body.email }).catch(
    (err) => {
      res.status(500).json({ error: err });
    }
  );
  if (!patient.authenticate(password) || !patient)
    return res.status(401).json({ error: "Email and password do not match" });

  const token = jwt.sign({ _id: patient._id }, JWT_SECRET);
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
 *      success: string,
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
 * }>
 * @returns if error <Promise{error: string}>
 */
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  const patient = await Patient.findOne({ email: email }).catch((err) => {
    return res.status(500).send({ error: err });
  });
  if (!patient) {
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
    const patient = await Patient.findById(_id).catch((err) => {
      return res.status(500).send({ error: err });
    });
    if (!patient) {
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

  let patient = await Patient.findById(_id).catch((err) => {
    return res.status(500).send({ error: err });
  });
  patient = lodash.extend(patient, details);
  await patient.save().catch((err) => {
    return res.status(500).send({ error: err });
  });

  return res.status(200).json({ message: "Upadted Successfully!" });
};

/**
 * send email
 * @param req {body : {name, phone, email, message}}
 * @param res
 * @returns if success
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
 * @returns if fail
 * { Promise<{
 *     error: string
 * }>
 * }
 */
exports.needHelp = async (req, res) => {
  const { name, email, phone, message } = req.body;
  const result = await needHelpEmail(email, name, phone, message).catch(
    (err) => {
      return res.status(502).send({ error: err });
    }
  );
  return res.status(250).send({
    success: "Email sent successfully",
    result,
  });
};

/**
 * subscribe to newsletter
 * @param req {body: {email}}
 * @param res
 * @return {Promise<{message: string}>}
 */
exports.newsletter = async (req, res) => {
  const { email } = req.body;
  const newsletter = new Newsletter({ email });
  await newsletter.save().catch((err) => res.json({ message: err }));
  res.status(201).json({ message: "You're successfully subscribed" });
};

/**
 * create an instance of Demo in DB and send email, user shouldn't be logged in
 * @param req {body: {firstName, lastName, phone, email, person}}
 * @param res
 * @return if success {Promise<{message: string}>}
 * @return if fail {Promise<{error: string}>}
 */
exports.scheduleDemo = async (req, res) => {
  const { firstName, lastName, phone, email, person } = req.body;

  const result = await requestDemo(
    email,
    firstName,
    lastName,
    phone,
    person
  ).catch((err) => {
    return res.status(502).send({ error: err });
  });

  console.log("Email sent: " + result.response);
  const demo = new Demo(req.body);
  await demo.save().catch((err) => res.status(500).json({ message: err }));
  res.status(201).json({
    message:
      "You successfully scheduled a demo, We will be contacting you in very short time.",
  });
};

/**
 *
 * @param req
 * @param res
 * @return {*}
 */
exports.signout = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({ message: "Signed Out!" });
};

exports.sendOTP = (req, res) => {
  const { phone } = req.body;
  const CLIENT_URL = "http://" + req.headers.host;
  if (phone.length === 10) {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const token = jwt.sign({ otp }, JWT_KEY, { expiresIn: "30m" });
    fast2sms.query({
      authorization:
        "xpMOJVXcSg8R2H3erCBq7oi6lF1NK5wPbGfdysW0ZnYtDkUaTIZr2EcFJDBbHvY3UKqsaL0OolGPyRAm",
      sender_id: "TXTIND",
      message: "Thank you for signing up on jeevitiv,\nYour OTP is " + otp,
      route: "v3",
      numbers: phone,
    });

    fast2sms.headers({
      "cache-control": "no-cache",
    });

    fast2sms.end(function (res) {
      if (res.error) throw new Error(res.error);
      console.log(res.body);
      console.log(res.body.message[0]);
    });
    return res.json({
      message: `To Verify OTP :  ${CLIENT_URL}/verifyOTP/${token}/:OTP`,
    });
  }
};

exports.verifyOTP = (req, res) => {
  const token = req.params.token;
  const OTP = req.params.otp;
  if (token) {
    jwt.verify(token, JWT_KEY, (err, decodedToken) => {
      if (err) return res.json({ error: "OTP has Expried" });
      else {
        const { otp } = decodedToken;
        if (otp == OTP)
          return res.json({ message: "OTP verified Successfully" });
        else return res.json({ message: "WRONG OTP" });
      }
    });
  } else {
    console.log("OTP Verification error!");
    return res.json({ error: "OTP Verification failed!" });
  }
};
