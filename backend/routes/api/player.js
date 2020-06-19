const express = require('express');
const router = express.Router();
const  keys = require("../../config/keys");
const bcrypt =  require("bcryptjs");
const jwt =require("jsonwebtoken");


const validatingregisterInput = require("../../validators/register");
const validatingLoginInput   = require("../../validators/login");
const ValidatorsInputDetails = require("../../validators/playerdetails");



const Player = require("../../model/player")
const PlayerDetail = require('../../model/playerdetail')

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
                       return res.json({success:true,message:"User Added Successfully!"}).status(200)
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


router.post("/playerDetail",(req,res) =>{
    console.log('[server]' ,req.body)
    const {error,isValid} = ValidatorsInputDetails(req.body)

    if(!isValid){
        if(error.playername){
            return res.json({message:error.playername}).status(404)     
         }
         
        if(error.teamname){
            return res.json({message:error.teamname}).status(404)
         }

         if(error.matchdate){
            return res.json({message:error.matchdate}).status(404)
         }

         if(error.goalWon){
            return res.json({message:error.goalWon}).status(404)
         }

         if(error.goalAttmp){
            return res.json({message:error.goalAttmp}).status(404)
         }

         if(error.tackleWon){
            return res.json({message:error.tackleWon}).status(404)
         }

         if(error.tackleAttmp){
            return res.json({message:error.tackleAttmp}).status(404)
         }

         if(error.passesWon){
            return res.json({message:error.passesWon}).status(404)
         }

         if(error.passesAttmp){
            return res.json({message:error.passesAttmp}).status(404)
         }
    }

    PlayerDetail.findOne({playername:req.body.playername}).then(user =>{
        if(user){
            var newDate = req.body.matchdate;
            var OldDate = user.matchdate;
            console.log(newDate);
            console.log(OldDate);
            if(OldDate == newDate)
            {
                PlayerDetail.updateOne({playername:req.body.playername},{$set:req.body}, 
                     {upsert:true,new:true,runValidators:true},
                     function(err,doc){
                     if(err)
                     {
                      var err = new Error("Error in modifying Existing Details")
                      err.statusCode = 401;
                      res.json(err);
                     }
                     else
                     {  res.statusCode = 200;
                        res.json({success:true,message:"DETIALS MODIFYED"});
                     }
                     });
            }
            else if(OldDate != newDate)
            {   
                PlayerDetail.updateOne({playername:user.playername},{$push:{playerData:user}}, //it push the current datab in playerData Array//
                    function(err,send){
                        if(err)
                        {
                            var err = new Error("Error in replacing Detials");
                            err.statusCode = 401;
                            res.json(err);
                        }
                        else
                        { //it update the current data with new one//
                           PlayerDetail.findOneAndUpdate({playername:user.playername},req.body,
                            {upsert:true,new:true,runValidators:true},
                            function (err,update){
                            if(err)
                            {
                                var err = new Error("ERROR in Updating the Details")
                                res.statusCode =200;
                                res.json(err);
                            }
                            else
                            {    res.statusCode = 200;
                                 res.json({success:true,message:"Details Updated"})
                            }
                          });
                        }
                    });
            }
}
        else
        {
            const PlayerDetails = new PlayerDetail ({
                 playername:req.body.playername,
                 teamname:req.body.teamname,
                 matchdate:req.body.matchdate,
                 goalWon:req.body.goalWon,
                 goalAttmp:req.body.goalAttmp,
                 tackleWon:req.body.tackleWon,
                 tackleAttmp:req.body.tackleAttmp,
                 passesWon:req.body.passesWon,
                 passesAttmp:req.body.passesAttmp
             });    
             PlayerDetails.save().then((user =>{
                 res.statusCode = 200;
                 res.json({success:true,message:"DETAILS ADDED SUCCESSFULLY"});
             }))
        }
    });
});


router.get('/:playername/:matchdate',(req,res,next)=>{
    PlayerDetail.findOne({playername:req.params.playername})
    .then((user)=>{

        if(user !=null)
        {
            if(user.matchdate === req.params.matchdate)
            {
                res.statusCode = 200;
                res.setHeader("Content-Type",'application/json')
                return res.json(user)

            }
            
            const h = user.playerData.length;
            for(var i =h-1;i>=0;i--)
            {
                if(user.playerData[i].matchdate === req.params.matchdate)
                {   
                    res.statusCode = 200;
                    return res.json(user.playerData[i])
                }
                else
                {  
                    res.statusCode = 404;
                    return res.json({message:"Not Found Data of given match date"});
                }

            }
        }
        else
        {   res.statusCode = 404;
            res.json({message:"User not found"});
        }
       
        });
    })

module.exports = router;

