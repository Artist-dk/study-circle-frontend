const express = require('express');
const router = express.Router();
const controller = require('../controllers/contactus');

router.post('/send', controller.saveMessage);

module.exports = router;
