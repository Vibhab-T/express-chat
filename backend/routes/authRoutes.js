const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

router.post('/signup', authController.authenticationSignup);
router.post('/login', authController.authenticationLogin);
router.post('/logout', authController.authenticationLogout);

module.exports = router;
