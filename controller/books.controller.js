'use strict';

const userModel = require('../models/user.model');

// const createCat = (request, response) => {
//     // const { catName, userEmail } = request;
//     response.send(" We got the request and we are still working on functionality");
// }

const getBooks = (request, response) => {

    const { email } = request.query;
    console.log(email);
    userModel.findOne({ email: email }, (error, user) => {
        if (error) {
            response.send(error)
        } else {
            response.json(user)
        }
    });
}

const createBook = (request, response) =>{
    const {email, bookName, description, status} = request.body;
    userModel.findOne({ email: email}, (error, user) =>{
        if(error){
            response.send(error)
        }
        else{
            user.books.push({name: bookName, description: description, status: status});
            user.save();
            response.json(user)
        }
    })
}


const deleteBook = (request, response) => {
    const bookIndex = request.params.book_idx;
    console.log(bookIndex);
    const { email } = request.query;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.books.splice(bookIndex, 1);
            userData.save();
            response.send(userData)
        }

    });
}

const updateBook = (request, response) => {
    console.log(request.params)
    const bookIndex = request.params.book_idx;
    const { email, bookName, description, status } = request.body;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.books.splice(bookIndex, 1, { name: bookName, description: description, status: status  });
            userData.save();
            response.send(userData)
        }

    });
}



module.exports = {getBooks,createBook,deleteBook,updateBook};