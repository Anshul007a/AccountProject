//database.js: This file contains configuration settings for connecting to the database. It might include information like the database host, port, username, password, and database nam

// config/database.js
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/myappdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
         })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
