const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const connectToMongo = require('./db/mongoConnect'); //for mongo connection

const authRoutes = require('./routes/authRoutes'); // Authentication Routes
const messageRoutes = require('./routes/messageRoutes'); // Message Routes
const userRoutes = require('./routes/userRoutes'); //User Routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //parse json from requests
app.use(cookieParser()); //parse cookies

app.get('/', (req, res, next) => {
	res.send('<h1>BACKEND SERVER RUNNING</h1>');
});
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
	connectToMongo();
	console.log(`Server Running On ${PORT}`);
});
