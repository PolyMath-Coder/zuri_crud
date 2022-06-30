const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_KEY = process.env.MONGO_STRING;

const connect = () => {
  mongoose.connect(MONGO_KEY);
  const database = mongoose.connection;
  database.once('error', (err) => {
    console.log('There has been an error', err);
  });
  database.on('connected', () => {
    console.log('Database now plugged in...');
  });
};

module.exports = { connect };
