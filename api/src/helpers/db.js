const mongoose = require('mongoose');
const { db } = require('../config');

module.exports.connectDB = () => {
	mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
	return mongoose.connection;
};
