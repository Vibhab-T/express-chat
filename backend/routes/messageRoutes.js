const express = require('express');

const router = express.Router();

const msgController = require('../controllers/msgController');
const protectRoute = require('../middleware/protectRoute');

router.get('/:id', protectRoute, msgController.getMessages);
router.post('/send/:id', protectRoute, msgController.sendMessage);

module.exports = router;
