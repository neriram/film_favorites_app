//Imports 
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const User = require("./user");

//Database
mongoose.connect("mongodb+srv://admin:ZvhbsZDQCl3MAsdk@cluster0.vpnjv.mongodb.net/<dbname>?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
() => {
    console.log("Mongoose is connected");
});

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000", //location of React app it's connected to
        credentials: true,
    })
);
app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

//Routes
app.post("/login", (req, res, next) => {
    console.log(req.body)
});
app.post("/register", (req, res) => {
    console.log(req.body)
});
app.get("/user", (req, res) => {
});

//Server
app.listen(4000, () => {
    console.log("Server is on");
});