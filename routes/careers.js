const router = require("express").Router();
const careers = require("../models/careers");

//CREATE POST
router.post("/careers", async (req, res) => {
  const newCareers = new careers(req.body);
  try {
    const savedCareers = await newCareers.save();
      res.status(200).json(savedCareers);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
