const express = require('express');

const userController = require('../controllers/userController');
const protectRoute = require('../middleware/protectRoute');

const router = express.Router();

router.get('/', protectRoute, userController.getUsersForSidebar);

module.exports = router;
