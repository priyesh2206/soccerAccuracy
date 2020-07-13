const Express = require('express')
const router = Express.Router()

const PlayerDetail = require('../../model/playerdetail')


router.delete('/:playername',(req,res,next)=>{
    PlayerDetail.findOne({playername:req.params.playername})
    .then((user)=>{
        if(user != null){
            user.remove({})
                res.statusCode = 200;
                res.setHeader('Content-Type','appliction/json');
                return res.json({message:"Record Deleted ScuccessFully!!",success:true});
        }

        else{
            res.json({message:"User Doesn't Found !!",success:false});
        }


    })
})


///Try this ..... after some time>???????//a

// router.delete('/:playername/:matchdate',(req,res,next)=>{

//     PlayerDetail.findOne({playername:req.params.playername})
//     .then((user)=>{

//         if(user !=null)
//         {
//             if(user.matchdate === req.params.matchdate)
//             {
//                 res.statusCode = 500;
//                 res.setHeader("Content-Type",'application/json')
//                 res.json({message:"Your to allowed to Delete this Record,Since it contain essential data ! ",succes:"notAllow"})
                
//             }
//             const h = user.playerData.length;
//             for(var i = h-1;i>=0;i--)
//             {  
//             //     if(user.playerData[i].matchdate === req.params.matchdate)
//             //     {  
//             //         console.log(user.playerData[i].matchdate)
//             //         user.playerData.id(user.playerData[i]._id).remove();

//             //     user.save().then((users)=>{
//             //     res.statusCode = 200;
//             //     // res.setHeader('Content-Type','appliction/json');
//             //     return res.json(users);
//             //    })  
//             //    .catch((err)=>console.log(err));
//             // }
//             }  
//             res.statusCode = 404;
//             return res.json({message:"Record Not Found of given match date",succes:false});

//         }
//         else
//         {   res.statusCode = 404;
//             return res.json({message:"User Record Not Found",succes:false});
//         }
//         })
// })










module.exports = router;