const express = require('express') // require the express package
const app = express() 
require('dotenv').config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const seedUserData = require('./models/user.model');
const getBooks = require('./controller/books.controller')

const cors = require('cors'); // enable the communication between the frontend and the backend

app.use(cors());
mongoose.connect('mongodb://localhost:27017/myFavouriteBooks', 
 { useNewUrlParser: true, useUnifiedTopology: true });

//  seedUserData();
 app.get('/books', getBooks)

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});