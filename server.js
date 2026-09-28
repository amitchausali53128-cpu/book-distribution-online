const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const transactionRoutes = require('./controllers/transactionController');
const userRoutes = require('./controllers/userController');

const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 3000;

app.use('/transactions', transactionRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hare Krishna! prabhu, I am ready to serve you.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})