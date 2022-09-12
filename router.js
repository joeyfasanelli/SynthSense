const express = require("express");
const router = express.Router();
const credential = {
    email: "admin@gmail.com",
    password: "admin123",

}

//User Login
router.post("/login", (req, res) => {
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.end('Login Successful');
    }else{
        res.end("invalid Username");
    }
});

module.exports = router;