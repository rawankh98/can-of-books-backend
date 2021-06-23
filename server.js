const express = require('express') // require the express package
const app = express() 
require('dotenv').config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const seedUserData = require('./models/user.model');
const getBooks = require('./controller/books.controller').getBooks;
const createBook = require('./controller/books.controller').createBook;
const deleteBook = require('./controller/books.controller').deleteBook;
const updateBook = require('./controller/books.controller').updateBook;

const cors = require('cors'); // enable the communication between the frontend and the backend

app.use(cors());
mongoose.connect('mongodb://localhost:27017/myFavouriteBooks', 
 { useNewUrlParser: true, useUnifiedTopology: true });
 app.use(express.json());

//  seedUserData();
 app.get('/books', getBooks);
 app.get('/',(request,responce)=>{
    responce.send('Hello World');
})
 app.post('/book', createBook);

 app.delete('/book/:book_idx', deleteBook);

 app.put('/book/:book_idx', updateBook);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});