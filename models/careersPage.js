const mongoose = require("mongoose");
const marked = require("marked");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window);

const CareersPageSchema = new mongoose.Schema(
  {
    postname: {
      type: String,
      required: true,
    },
    numberofpost: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    country: {
        type: String,
        required: false,
      },

      positiondesc: {
        type: String,
        required: false,
      },

    //first
    heading1: {
      type: String,
      required: false,
    },
    desc1: {
      type: String,
      required: false,
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
    compensationdesc: {
      type: String,
      required: false,
    },

    username: {
        type: String,
        required: true,
      },
    // sanitizedHtml:{
    //   type: String,
    //   required: true
    // },
  },

  { timestamps: true }
);
// PostSchema.pre('validate',  function(next){
//   if(this.desc){
//     this.sanitizedHtml =dompurify.sanitize(marked(this.desc))
//     return this.sanitizedHtml
//   }

//    next()
// })
module.exports = mongoose.model("CareersPage", CareersPageSchema);
