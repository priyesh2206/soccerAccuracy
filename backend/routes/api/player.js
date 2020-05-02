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
       if(error.username){
        return res.json({message:"Username Is Required"}).status(400);
       }
       if(error.email){
        return res.json({message:"Email Is Required"}).status(400);
       }
       if(error.password){
        return res.json({message:"Password Is Required"}).status(400);
       }
       if(error.password2){
        return res.json({message:"Re-Password Is Required"}).status(400);
       }
   }
   Player.findOne({username:req.body.username}).then(user =>{
       if(user){
           return res.json({message:"username Is Already Exist!"}).status(404)
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
                       return res.json({message:"User Added Successfully!"}).status(200)
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
        if(error.username){
            return res.json({message:"Username Is  Required"}).status(400);
           }
           if(error.password){
            return res.json({message:"Password  Is Required"}).status(400);
           }
     }

     const username = req.body.username;
     const password = req.body.password;
     
     Player.findOne({username}).then(user =>{
         if(!user){
             return res.json({message:"User Not Find ! Please Check Username !"});
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
                 res.json({message:"Password Incorrect Please Check!"}).status(404)
             }
         });
    });
});


router.post("/playerDetail",(res,req) =>{

// work freom here//


})









module.exports = router;

