const moongoose = require('mongoose');


const PlayerDetails = new moongoose.Schema({
    playername:{type:String,required:true},
    teamname:{type:String,required:true},
    matchdate:{type:Date,required:true},
    goalWon:{type:Number,required:true},
    goalAttmp:{type:Number,required:true},
    tackleWon:{type:Number,required:true},
    tackleAttmp:{type:Number,required:true},
    passesWon:{type:Number,required:true},
    passesAttmp:{type:Number,required:true},
    timestamp:{type:Date ,default:Date.now},
    playerData:[{
        matchdate:{type:Date,required:true},
        goalWon:{type:Number,required:true},
        goalAttmp:{type:Number,required:true},
        tackleWon:{type:Number,required:true},
        tackleAttmp:{type:Number,required:true},
        passesWon:{type:Number,required:true},
        passesAttmp:{type:Number,required:true},
        timestamp:{type:Date ,default:Date.now},
    }]

})
module.exports = moongoose.model('PlayerDetail',PlayerDetails) 