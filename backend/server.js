const express = require("express");
const bodyparser = require("body-parser");
const mongoose= require("mongoose");
mongoose.Promise = global.Promise;
const cors= require("cors");
const passport = require("passport");
const players = require('./routes/api/player')
const weekly = require('./routes/api/weekly')
const DeleteRecord  = require('./routes/api/delete')
const mongoconfig = require('./config/keys').mongoURI;

require('dotenv').config();

const app = express();
const port = process.env.PORT|| '5000';

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));



mongoose.connect("mongodb+srv://football_api:"+mongoconfig+"@cluster0.gwo9r.mongodb.net/<dbname>?retryWrites=true&w=majority",
{useCreateIndex: true,useNewUrlParser:true,useUnifiedTopology: true })
.then(()=>{
    console.log("[Database] -connected to db :-)");

},(err)=>{
    console.log(err);
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
app.use('/weekly',weekly);
app.use('/deletefull',DeleteRecord);