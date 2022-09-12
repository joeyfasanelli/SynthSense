const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const tracksController = require('./controllers/tracks')
const methodOverride = require('method-override');

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

app.get('/', (req,res) => {
    res.render('home.ejs')
})




// const express = require('express');
// const app = express();
// require('dotenv').config();
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const bodyparser = require("body-parser");
// const session = require("express-session");
// const {v4:uuidv4} = require("uuid");
// const router = require("./routes/login")


// mongoose.connect(process.env.DATABASE_URL)

// // Database
// const db = mongoose.connection;
// db.on('error', (err) => console.log(err.message + ' is mongodb not running?'));
// db.on('connected', () => console.log('Mongo connected'));
// db.on('disconnected', () => console.log('Mongo disconnected'));


// // Middleware
// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({extended:true}))
// app.use(methodOverride('_method'))
// app.use('/tracks', tracksController)

// app.set('view engine', 'ejs')

// app.use(session({
//     secret: uuidv4(),
//     resave: false,
//     saveUninitialized: true,
// }));

// app.use('/route', router);

// app.get('/', (req,res) => {
//     res.render('login.ejs')
// });


// Listener
app.listen(3000, () => {
    console.log(`Server is listening on port 3000`)
})