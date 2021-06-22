'use strict';

const userModel = require('../models/user.model');

// const createCat = (request, response) => {
//     // const { catName, userEmail } = request;
//     response.send(" We got the request and we are still working on functionality");
// }

const getBooks = (request, response) => {

    const { email } = request.query;

    userModel.find({ email: email }, (error, user) => {
        if (error) {
            response.send(error)
        } else {
            response.json(user)
        }
    });
}

const createBook = (request, response) =>{
    const {userEmail, bookName, discBook, bookStatus} = request.body;
    userModel.findOne({ email: userEmail}, (error, user) =>{
        if(error){
            response.send(error)
        }
        else{
            user.books.push({name: bookName, description: discBook, status: bookStatus});
            user.save();
            response.json(user)
        }
    })
}


const deleteBook = (request, response) => {
    console.log(request.params)
    const catIndex = request.params.cat_idx;
    const { email } = request.query;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.books.splice(catIndex, 1);
            userData.save();
            response.send(userData)
        }

    });
}

const updateBook = (request, response) => {
    console.log(request.params)
    const bookIndex = request.params.book_idx;
    const { userEmail, bookName, discBook, bookStatus } = request.body;

    userModel.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.books.splice(bookIndex, 1, { name: bookName, description: discBook, status: bookStatus  });
            userData.save();
            response.send(userData)
        }

    });
}



module.exports = {getBooks,createBook,deleteBook,updateBook};