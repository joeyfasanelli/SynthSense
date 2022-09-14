const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const tracksController = require('./controllers/tracks')
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;
// const axios = require('axios').default;

// API Key = 9d7e82eade62cb2b4032778b4a621ce9

// const session = require("express-session");
// const {v4:uuidv4} = require("uuid");


mongoose.connect(process.env.DATABASE_URL)



// Database
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongodb not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


// Middleware
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))
app.use('/tracks', tracksController)
app.use(express.static('public'))
// app.use(session({
//     secret: uuidv4(),
//     resave: false,
//     saveUninitialized: true,
// }));
// app.set('view engine', 'ejs')

app.listen(PORT, () => console.log('express is listening on:', PORT));



// HOME PAGE

app.get('/', (req,res) => {
    res.render('login.ejs')
});








