const express = require('express'); // Import Express
const mongoose  = require('mongoose'); 
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Create a mongoose DB connection -> I can also Create a Seperate file with this and use import / use in thsi file. 
mongoose.connect('mongodb+srv://alexartbrown:9254F0rest@cluster0.ijuff.mongodb.net/').then(() =>console.log("Connection to MongoDB Established")).catch((error) => console.log(error));

const app = express ();
const PORT = process.env.PORT || 5001; // Port for backend App Server

// my app will USE (app.USE) the following compnentes. 
app.use(
    cors({
        orgin: 'host://localhost:5173/',
        mehtods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            "Pragma"
        ],
        credentials :true
    })
);

app.use(cookieParser());

app.use(express.json());

app.listen(PORT, () => console.log (`Server is now running on port ${PORT}`))