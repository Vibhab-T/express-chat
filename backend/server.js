const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path');

const connectToMongo = require('./db/mongoConnect'); //for mongo connection

const authRoutes = require('./routes/authRoutes'); // Authentication Routes
const messageRoutes = require('./routes/messageRoutes'); // Message Routes
const userRoutes = require('./routes/userRoutes'); //User Routes

const { app, server } = require('./socket/socket');

dotenv.config();

//__dirname = path.resolve();
// PORT should be assigned after calling dotenv.config() because we need to access the env variables. Didn't realize while recording the video. Sorry for the confusion.
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*name', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

server.listen(PORT, () => {
	connectToMongo();
	console.log(`Server Running on port ${PORT}`);
});
