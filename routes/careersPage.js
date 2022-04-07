const router = require("express").Router();
const CareersPage = require("../models/careersPage");

//CREATE POST
router.post("/", async (req, res) => {
  const newCareersPage = new CareersPage(req.body);
  try {
    const savedCareersPage = await newCareersPage.save();
    res.status(200).json(savedCareersPage);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const careersPage = await CareersPage.findById(req.params.id);
    if (careersPage.username === req.body.username) {
      try {
        const updatedcareersPage = await CareersPage.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedcareersPage);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your careersPage!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const careersPage = await CareersPage.findById(req.params.id);
    if (careersPage.username === req.body.username) {
      try {
        await careersPage.delete();
        res.status(200).json("CareersPage has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your careersPage!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const careersPage = await CareersPage.findById(req.params.id);
    res.status(200).json(careersPage);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
//   const username = req.query.user;
//   const catName = req.query.cat;
  try {
    let careersPages;
      careersPages = await CareersPage.find(); 
    res.status(200).json(careersPages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
