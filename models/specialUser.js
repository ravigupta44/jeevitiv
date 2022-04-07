const mongoose = require("mongoose");
const uuidv1 = require("uuidv1");
const crypto = require("crypto");

const specialUserSchema = new mongoose.Schema({
  name: String,
  email: String,
  hashed_password: String,
  salt: String,
  verified: {
    type: Boolean,
    default: false,
  },
});

specialUserSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

specialUserSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) == this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("SpecialUser", specialUserSchema);
