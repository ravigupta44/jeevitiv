const mongoose = require("mongoose");
const marked = require("marked");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window);

const PodcastSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },

    //first
    heading1: {
      type: String,
      required: false,
    },
    desc1: {
      type: String,
      required: true,
    },

    //second
    heading2: {
      type: String,
      required: false,
    },
    desc2: {
      type: String,
      required: false,
    },

    //third
    heading3: {
      type: String,
      required: false,
    },
    desc3: {
      type: String,
      required: false,
    },

    username: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Podcast", PodcastSchema);
