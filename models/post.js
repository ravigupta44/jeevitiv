const mongoose = require("mongoose");
const marked = require("marked");
const createDomPurify = require("dompurify");
const {JSDOM} = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window)

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
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
module.exports = mongoose.model("Post", PostSchema);
