const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const tracksController = require('./controllers/tracks')
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;
// const session = require("express-session");
// const {v4:uuidv4} = require("uuid");
// const credential = {
//     email: "admin@yahoo.com",
//     password: "admin123",

// }

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
// app.use(session({
//     secret: uuidv4(),
//     resave: false,
//     saveUninitialized: true,
// }));
// app.set('view engine', 'ejs')

app.listen(PORT, () => console.log('express is listening on:', PORT));


// LOGIN PAGE

app.get('/', (req,res) => {
    res.render('login.ejs')
});


// //User Login
// app.post("/", (req, res) => {
//     if(req.body.email == credential.email && req.body.password == credential.password){
//         req.session.user = req.body.email;
//         res.redirect('/tracks')
//     }else{
//         res.end("Invalid Username or Password");
//     }
// });

// //Route for Home
// app.get('/', (req, res) => {
//     if(req.session.user) {
//         res.render('index', {user: req.session.user})
//     } else {
//         res.end("Unauthorized User")
//     }
// });

// //User Logout
// app.get('/', (req, res) => {
//     req.session.destroy(function(err){
//         if(err){
//             res.send("Error")
//         }else{
//             res.render("login", {logout: "Logout Successful"})
//         }
//     })
// });



