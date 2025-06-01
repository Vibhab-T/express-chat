const Message = require('../models/messageModel');
const Convo = require('../models/conversationModel');

exports.sendMessage = async (req, res, next) => {
	try {
		const { message } = req.body;
		const { id: recieverId } = req.params;
		const senderId = req.user._id;

		let conversation = await Convo.findOne({
			participants: { $all: [senderId, recieverId] },
		});

		if (!conversation) {
			conversation = await Convo.create({
				participants: [senderId, recieverId],
			});
		}

		const newMessage = new Message({ senderId, recieverId, message });

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		//SOCKET IO HERE

		//parallel awaits
		await Promise.all([conversation.save(), newMessage.save()]);

		res.status(201).json({ message: newMessage });
	} catch (error) {
		console.log('Err0r in Send Message Controller: ', error.message);
		res.status(500).json({ error: 'Server Error At MSGCTRL-SENDMSG' });
	}
};
