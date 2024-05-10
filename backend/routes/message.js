const express = require('express');
const router = express.Router();
const controller = require('../controllers/message');
const upload = require('../config/multerConfig');
// const Book = require('../models/bookModel');

router.get('/fetchUsers', controller.fetchUsers);
router.get('/fetchMessages', controller.fetchMessages);
router.post('/saveMessage', upload.single('file'), controller.saveMessage);
router.get('/getRecipientId', upload.single('file'), controller.fetchMessages);
router.get('/recipientDetails', upload.single('file'), controller.fetchMessages);



module.exports = router;
