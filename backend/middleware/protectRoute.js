const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

async function protectRoute(req, res, next) {
	try {
		const token = req.cookies.jwt;
		if (!token) {
			return res.status(401).json({ error: 'Unauthorized - No Token' });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ error: 'Unauthorized - Invalid Token' });
		}

		const user = await User.findById(decoded.userId).select('-password');

		if (!user) {
			return res.status(404).json({ error: 'User Not Found!' });
		}

		req.user = user;

		next();
	} catch (error) {
		console.log('Error in protect route: ', error.message);
		res.status(500).json({ error: 'Server Error At PROT-RT' });
	}
}

module.exports = protectRoute;
