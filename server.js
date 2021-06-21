const express = require('express') // require the express package
const app = express() 
require('dotenv').config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');

const cors = require('cors'); // enable the communication between the frontend and the backend

app.use(cors())
mongoose.connect('mongodb://localhost:3032')


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});