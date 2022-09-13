const express = require("express");
const router = express.Router();
const credential = {
    email: "admin@yahoo.com",
    password: "admin123",

}

//User Login
router.post("/", (req, res) => {
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/tracks')
    }else{
        res.end("Invalid Username or Password");
    }
});

//Route for Home
router.get('/', (req, res) => {
    if(req.session.user) {
        res.render('index', {user: req.session.user})
    } else {
        res.end("Unauthorized User")
    }
});

//User Logout
router.get('/', (req, res) => {
    req.session.destroy(function(err){
        if(err){
            res.send("Error")
        }else{
            res.render("login", {logout: "Logout Successful"})
        }
    })
});

module.exports = router;