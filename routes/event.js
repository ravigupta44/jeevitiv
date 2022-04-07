const express = require('express');
const { covidEvents } = require('../controllers/events');
const router= express.Router();

router.get('/covidEvents', covidEvents);

module.exports = router;