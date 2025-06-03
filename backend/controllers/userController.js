const User = require('../models/userModel');

exports.getUsersForSidebar = async (req, res, next) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({
			_id: { $ne: loggedInUserId },
		}).select('-password');

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.log('Error at USRCTRL-GUSRFSB: ', error.message);
		res.status(500).json({ error: 'Server Error At: USRCTRL-GUSRFSB' });
	}
};
