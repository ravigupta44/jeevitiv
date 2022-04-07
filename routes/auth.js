const express = require("express");
const {
  patientSignup,
  activatePatientAccount,
  gotoReset,
  forgotPassword,
  resetPassword,
  patientSignin,
  signout,
  needHelp,
  newsletter,
  scheduleDemo,
  sendOTP,
  verifyOTP,
} = require("../controllers/auth");
const { requireAuth } = require("../middlewares/require-auth");
const router = express.Router();

router.post("/patientSignup", patientSignup);
router.get("/activateUser/:token", activatePatientAccount);
router.post("/patientSignin", patientSignin);
router.post("/forgot", forgotPassword);
router.get("/forgot/:token", gotoReset);
router.patch("/reset", resetPassword);
router.post("/needHelp", needHelp);
router.post("/newsletter", requireAuth, newsletter);
router.post("/scheduleDemo", scheduleDemo);
router.post("/sendOTP", sendOTP);
router.get("/verifyOTP/:token/:otp", verifyOTP);

// router.post('/doctorSignup', doctorSignup);
// router.post('/doctorSignin',  doctorSignin);
router.get("/signout", signout);

module.exports = router;
