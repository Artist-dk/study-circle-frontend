const express = require('express')
const router = express.Router();
const controller =  require('../controllers/settings')

router.put('/theme',controller.theme);

module.exports = router;