const moongoose = require('mongoose');


const PlayerDetails = new moongoose.Schema({
    playername:{type:String,required:true},
    teamname:{type:String,required:true},
    date:{type:Date,required:true},
    goalWon:{type:Number,required:true},
    goalAttmp:{type:Number,required:true},
    trackleWon:{type:Number,required:true},
    trackleAttmp:{type:Number,required:true},
    passesWon:{type:Number,required:true},
    passesAttmp:{type:Number,required:true},
    timestamp:{type:Date ,default:Date.now},
    playerData:[{
        date:{type:Date},
        goalWon:{type:Number,required:true},
        oalAttmp:{type:Number,required:true},
        trackleWon:{type:Number,required:true},
        trackleAttmp:{type:Number,required:true},
        passesWon:{type:Number,required:true},
        passesAttmp:{type:Number,required:true},
        timestamp:{type:Date ,default:Date.now},
    }]

})
module.exports = moongoose.model('PlayerDetail',PlayerDetails) 