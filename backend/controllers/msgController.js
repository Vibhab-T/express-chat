const Message = require('../models/messageModel');
const Convo = require('../models/conversationModel');
const { io, getReceiverSocketId } = require('../socket/socket');

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

		//parallel awaits
		await Promise.all([conversation.save(), newMessage.save()]);

		//SOCKET IO HERE
		const receiverSocketId = getReceiverSocketId(recieverId);
		if (receiverSocketId) {
			io.to(receiverSocketId).emit('newMessage', newMessage); //send events to specific clients.
		}

		res.status(201).json({ message: newMessage });
	} catch (error) {
		console.log('Err0r in Send Message Controller: ', error.message);
		res.status(500).json({ error: 'Server Error At MSGCTRL-SMSG' });
	}
};

exports.getMessages = async (req, res, next) => {
	try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;

		const conversation = await Convo.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate('messages');

		if (!conversation) {
			return res.status(200).json([]);
		}

		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log('Error in GET MESSAGES: ', error.message);
		res.status(500).json({ error: 'Server Error At MSGCTRL-GMSG' });
	}
};
