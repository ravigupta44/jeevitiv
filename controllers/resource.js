const Resource = require('../models/resource');
const imgur = require('imgur');
const fs = require('fs');
const SpecialUser = require('../models/specialUser');

exports.postResource = async (req, res) => {
    
    const file = req.files[0]
    const {id, date, message} = req.body;
    const url = await imgur.uploadFile(`./uploads/${file.filename}`)
    fs.unlinkSync(`./uploads/${file.filename}`)


    const resource = new Resource({id : id, datePosted : date, message : message, multimedia : url.link});
    resource.save()
    .then( () => {
        return res.json({message : "Posted Successfully"})
    })
    .catch( (err) => {
        return res.json({message: err})
    });
    // return res.json({ url : url.link})
}
