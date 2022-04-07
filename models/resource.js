const mongoose = require('mongoose');


const resourceSchema = new mongoose.Schema({
    createdBy: mongoose.Schema.ObjectId,
    datePosted: Date,
    message: String,
    multimedia: String
})

module.exports = mongoose.model("Resource", resourceSchema) 