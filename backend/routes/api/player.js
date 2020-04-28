const express = require('express');
const router = express.Router();
const  keys = require("../../config/keys");
const bcrypt =  require("bcryptjs");
const jwt =require("jsonwebtoken");


const validatingregisterInput = require("../../validators/register");
const validatingLoginInput   = require("../../validators/login");



const Player = require("../../model/player")



router.post("/register",(req,res)=>{

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
           const newplayer = new Player({
               username:req.body.username,
               email:req.body.email,
               password:req.body.password,
               timestamp:req.body.timestamp
           });

           bcrypt.genSalt(10,(err,salt) =>{
            bcrypt.hash(newplayer.password,salt,(err,hash)=>{
                if(err) throw err;
                newplayer.password = hash;
                newplayer
                   .save()
                   .then(user => {
                       return res.status(200).json({message:"player added successfully! :-)"})
                   })
                   .catch(err => console.log(err));
            });
           });
       }
   });
});


router.post("/login",(req,res) =>{
    
    console.log('[server]' ,req.body)
     const {error,isValid} = validatingLoginInput(req.body);
     if(!isValid){
         return res.status(400).json(error);
     }

     const username = req.body.username;
     const password = req.body.password;
     
     Player.findOne({username}).then(user =>{
         if(!user){
             return res.json({message:" user not found"});
         }
         bcrypt.compare(password,user.password).then(ismatch =>{
             if(ismatch){
                 const payload = {
                     id:user.id,
                     username:user.username
                 }
                 jwt.sign(payload,keys.secretOrKey,
                {
                    expiresIn:31556926    
                },
                (err,token) =>{
                    res.json({
                        success:true,
                        token:'Bearer' + token
                    });
                }
                 );
             }
             else{
                 res.json({message:"password is incorrect plz check !:-)"}).status(404)
             }
         });
    });
});

module.exports = router;

