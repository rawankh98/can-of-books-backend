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

module.exports = getBooks;