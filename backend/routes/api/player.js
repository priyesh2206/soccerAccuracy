const express = require('express');
const router = express.Router();
const  keys = require("../../config/keys");
const bcrypt =  require("bcryptjs");
const jwt =require("jsonwebtoken");


const validatingregisterInput = require("../../validators/register");
const validatingLoginInput   = require("../../validators/login");



const Player = require("../../model/player")



router.post('/register',(req,res)=>{

  console.log("[server]",req.body);
    const {error,isValid} = validatingregisterInput(req.body)
   if(!isValid){
       return res.status(404).json(error);
   }
   Player.findOne({username:req.body.username}).then(user =>{
       if(user){
           return res.status(400).json({username:"username is already exist!"})
       }
       else{
           const newpalyer = new Player({
               username:req.body.username,
               email:req.body.email,
               password:req.body.password,
               timestamp:req.body.timestamp
           });

           bcrypt.genSalt(10,(err,salt) =>{
            bcrypt.hash(newpalyer,salt,(err,hash)=>{
                if(err) throw err;
                newpalyer.password = hash;
                newpalyer
                   .save()
                   .then(user => {
                       return req.status(200).json({message:"palyer added successfully! :-)"})
                   })
                   .catch(err => console.log(err));
            });
           });
       }
   });
});



