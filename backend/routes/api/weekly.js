const Express = require('express')
const router = Express.Router();


const PlayerDetail = require('../../model/playerdetail');


router.get('/:playername',(req,res,next)=>{
   PlayerDetail.find({playername:req.params.playername})
   .then((user)=>{
       if(user!=null){
        return res.json(user);
    }
       else{
           res.statusCode=404;
           res.json({message:"user details not exist"});
       }
   })
})


module.exports = router;