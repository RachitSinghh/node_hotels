const mongoose = require('mongoose');

// define the mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

// set up MongoDB connection

mongoose.connect(mongoURL)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Could not connect to MongoDB...',err));

//get the default connection
// Mongoose maintains a default connecion object representing the mongoDB connection

const db = mongoose.connection;


// define  even listeners for database connection

db.on('connection', () =>{
    console.log('Connected to MongoDB server');
}); 

db.on('error', (err) =>{
    console.log('MongoDB connection error', err);
});

db.on('disconnected', () =>{
    console.log('MongoDB disconnected');
})


// exporst db  connection

module.exports = db;
