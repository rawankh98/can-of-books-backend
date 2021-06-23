'use strict';

const mongoose = require('mongoose');
const bookSchema = require('./books.model');

/*
 We are going to use mongoose, to do two things:
    - Create the schema
    - generate the model
*/

// Here we are creating a new schema obj, which will be used later on to generate the model
const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});

// generate the model based on the schema
const userModel = mongoose.model('users', userSchema);


const seedUserData = () => {
    const newUser = new userModel({
        email: 'rawanahmed115@gmail.com',
        books: [
            { name: 'Gone With The Wind',
             description: 'a story about civil war, starvation, rape, murder, heartbreak and slavery.' ,
             status: 'Available' 
            },
            {
             name: 'Hamlet',
             description: 'The ghost of the King of Denmark tells his son Hamlet to avenge his murder by killing the new king, Hamlets uncle.',
             status: 'Not Available'
            },
            {
                name: 'The Shadow Of The Wind',
                description: 's a love story, or two love stories, or several love stories to be honest. We focus on Daniel, a young man growing up.' ,
                status: 'Available'
               }

        ]
    });

    console.log(newUser);

    newUser.save();

}

// seedUserData();
module.exports = userModel;