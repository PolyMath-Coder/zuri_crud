const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

app.use('/api', require('./routes/todo.routes'));

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Welcome to the Zuri x I4G Training!' });
});

app.listen(PORT, () => {
  console.log(`Server is now live on port ${PORT}`);
});
