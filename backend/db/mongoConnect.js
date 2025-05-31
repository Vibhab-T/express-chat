const mongoose = require('mongoose');

async function connectToMongo() {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log('MongoDB Connection Successful');
	} catch (error) {
		console.log(`Error Connecting to MongoDB with ${error.message}`);
	}
}

module.exports = connectToMongo;
