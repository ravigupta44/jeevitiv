const router = require("express").Router();
const Podcast = require("../models/Podcast");

//CREATE POST
router.post("/", async (req, res) => {
  const newPodcast = new Podcast(req.body);
  try {
    const savedPodcast = await newPodcast.save();
    res.status(200).json(savedPodcast);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const podcast = await Podcast.findById(req.params.id);
    if (podcast.username === req.body.username) {
      try {
        const updatedPodcast = await Podcast.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPodcast);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your podcast!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const podcast = await Podcast.findById(req.params.id);
    if (podcast.username === req.body.username) {
      try {
        await podcast.delete();
        res.status(200).json("Podcast has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your podcast!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const podcast = await Podcast.findById(req.params.id);
    res.status(200).json(podcast);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
//   const username = req.query.user;
//   const catName = req.query.cat;
  try {
    let podcasts;
      podcasts = await Podcast.find(); 
    res.status(200).json(podcasts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
