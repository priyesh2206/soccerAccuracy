const express = require("express");
const bodyparser = require("body-parser");
const mongoose= require("mongoose");
const cors= require("cors");
const passport = require("passport");
const mongoURI = require('./config/keys');
const players = require('./routes/api/player')

require('dotenv').config();

const app = express();
const port = process.env.PORT|| '6000';

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));



mongoose.connect("mongodb+srv://Football_api:9EeGLHzyBtq36PHY@cluster0-gwo9r.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology: true })
.then(()=>{
    console.log("[Database] -connected to db :-)");

}).catch(()=>{
    console.log("[Database]-connection Failed");
});

app.use(cors());
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-requested-With,Content-Type,application/json,Accept,Authorization");  
    next();
})

app.listen(port,()=>{
    console.log(`[Server]:${port}`);
});

app.use(passport.initialize());

require('./config/passport')(passport);


app.use('/api/users',players);

