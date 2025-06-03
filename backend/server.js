const express = require('express');

const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes'); // Authentication Routes
const messageRoutes = require('./routes/messageRoutes');

const connectToMongo = require('./db/mongoConnect'); //for mongo connection

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json()); //parse json from requests
app.use(cookieParser()); //parse cookies

app.get('/', (req, res, next) => {
	res.send('<h1>BACKEND SERVER RUNNING</h1>');
});
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

app.listen(PORT, () => {
	connectToMongo();
	console.log(`Server Running On ${PORT}`);
});
