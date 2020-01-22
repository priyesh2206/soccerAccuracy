const mongoose = require("mongoose");


const Userschema = new mongoose.Schema({
  username:{type:String,required:true},
  email:{type:string,required:true,unique:true},
  password:{type:string,required:true,unique:true},
  timestamp:{type:Date,default:Date.now}
})

module.exports = mongoose.model('Player',Userschema);