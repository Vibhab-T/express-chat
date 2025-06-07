const User = require('../models/userModel'); //User Model
const bcryptjs = require('bcryptjs');
const generateTokenAndSetCookie = require('../utils/generateToken');

exports.authenticationLogin = async (req, res, next) => {
	try {
		//get input
		const { userName, password } = req.body;

		//check for username and password matching
		const user = await User.findOne({ userName });
		const isPassCorrect = await bcryptjs.compare(
			password,
			user?.password || ''
		);

		if (!isPassCorrect || !user) {
			return res.status(400).json({ error: 'Inavlid Login Credentials' });
		}

		//generate jwt token and cookie
		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			userName: user.userName,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log('Error in AUCTRL-LGIN', error.message);
		res
			.status(500)
			.json({ error: `Server Error AUCTRL-LGIN: ${error.message}` });
	}
};

exports.authenticationSignup = async (req, res, next) => {
	try {
		const { fullName, userName, password, confirmPassword, gender } = req.body;

		//check if passwords do not match
		if (password != confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		//check for existing user
		const user = await User.findOne({ userName });
		if (user) {
			return res.status(400).json({ error: 'Username already exists' });
		}

		//hash password
		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		//create profile picture
		const malePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
		const womenPic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

		//create new user
		const newUser = new User({
			fullName: fullName,
			userName: userName,
			password: hashedPassword,
			gender: gender,
			profilePic: gender == 'male' ? malePic : womenPic,
		});

		//save new user to database
		if (newUser) {
			//generate JWT token and cookie here
			generateTokenAndSetCookie(newUser._id, res);

			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				userName: newUser.userName,
				profilePic: newUser.profilePic,
			});
		}
	} catch (error) {
		console.log('Error in AUCTRL-SNUP', error.message);
		res.status(500).json({ error: 'Server Error AUCTRL-SNUP' });
	}
};

exports.authenticationLogout = async (req, res, next) => {
	try {
		res.cookie('jwt', '', { maxAge: 0 });
		res.status(200).json({ message: 'Logged Out Succesfully' });
	} catch (error) {
		console.log('Error in AUCTRL-LGOUT', error.message);
		res.status(500).json({ error: 'Server Error AUCTRL-LGOUT' });
	}
};
