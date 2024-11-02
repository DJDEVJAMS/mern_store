const express = require('express');
const mongoose  = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require(cors);

// Create a mongoose DB connection
mongoose.connect()

const app = express ('mongodb+srv://alexartbrown:9254F0rest@cluster0.ijuff.mongodb.net/').then(() =>console.log("Connection to MongoDB Established")).catch((error) => console.log(error));
const PORT = process.env.PORT || 5000;