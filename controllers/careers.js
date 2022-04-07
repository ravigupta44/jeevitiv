const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const careers = require("../models/careers");

exports.careerpage = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with data",
      });
    }
    //destructure the fields
    const { name, email, phone, linkedin, cv, portfolio } = fields;

    if (!name || !email || !phone || !linkedin || !cv || !portfolio) {
      return res.status(400).json({
        error: "Please include all fields",
      });
    }

    let product = new careers(fields);
    product.cv.data = fs.readFileSync(file.cv.path);
    product.cv.contentType = file.cv.type;
    product.linkedin.data = fs.readFileSync(file.linkedin.path);
    product.linkedin.contentType = file.linkedin.type;
    product.portfolio.data = fs.readFileSync(file.portfolio.path);
    product.portfolio.contentType = file.portfolio.type;

    //save to the DB
    product.save((err, product) => {
      if (err) {
        res.status(400).json({
          error: "Saving in db failed",
        });
      }
      res.json(product);
    });
  });
};
