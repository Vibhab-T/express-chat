const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		userName: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 6,
		},
		gender: {
			type: String,
			required: true,
			enum: ['male', 'female', 'other'],
		},
		profilePic: {
			type: String,
			default: '',
		},
	},
	{ timestamps: true } // createdAt, updatedAt for "member since ----"
);

const User = mongoose.model('user', userSchema);

module.exports = User;
