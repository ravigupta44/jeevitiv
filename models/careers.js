const mongoose = require("mongoose");

const careersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  cv: {
    data: Buffer,
    contentType: String,
  },
  portfolio: {
    data: Buffer,
    contentType: String,
  },
  linkedin: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("careers", careersSchema);
