// import express
const express = require('express');
const { connectDB } = require('./helpers/db');
const { PORT, db } = require('./config');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
	res.json({ message: 'the reloading thingy is working on auth too' });
});

app.get('/test', (req, res) => {
	res.json({ message: 'test message!!!!' });
});

connectDB()
	.on('error', console.log)
	.on('disconnected', connectDB)
	.once('open', () => {
		app.listen(PORT, () => {
			console.log(`Authh Server is running on port ${PORT}`);
			console.log(`Database connection URI is ${db}`);
		});
	});
