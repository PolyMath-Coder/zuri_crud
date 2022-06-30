const express = require('express');
const { json, urlencoded } = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
const MONGO_KEY = process.env.MONGO_STRING;
const { connect } = require('./config/mongoose');
app.use(json());
app.use('/api', require('./routes/todo.routes'));

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Welcome to the Zuri x I4G Training!' });
});
connect();
app.listen(PORT, () => {
  console.log(`Server is now live on port ${PORT}`);
});
