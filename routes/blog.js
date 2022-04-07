const express = require("express");
const {requireAuth} = require("../middlewares/require-auth");

const extractFile = require("../middlewares/file");

const {
  createdPost,
  updatePost,
  getPost,
  getPosts,
  deletePost,
} = require("../controllers/blog");

const router = express.Router();

router.post("/createpost", requireAuth, extractFile, createdPost);

router.put("/:id", requireAuth, extractFile, updatePost);

router.get("/get", getPosts);

router.get("/:id", getPost);

router.delete("/:id", requireAuth, deletePost);

module.exports = router;
