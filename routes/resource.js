const express = require('express');
const { postResource } = require('../controllers/resource');
const router= express.Router();

router.post('/post', postResource);

module.exports = router;