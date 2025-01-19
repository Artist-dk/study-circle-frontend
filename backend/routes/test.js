
const Router = require('express')
const router = Router();
const testController = require('../controllers/testController');

router.get('/', testController.apiConnection);

module.exports = router;