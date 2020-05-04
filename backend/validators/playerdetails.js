const Validators = require('validator');
const Isempty = require('is-empty')


module.exports = function  ValidatorsInputDetails(data){
    let error ={};

data.playername = !Isempty(data.playername)? data.playername:'';
data.teamname = !Isempty(data.teamname) ? data.teamname:'';
data.matchdata = !Isempty(data.matchdata) ?data.matchdata:'';
data.goalWon = !Isempty(data.goalWon) ? data.goalWon:'';
data.goalAttmp=!Isempty(data.goalAttmp) ? data.goalAttmp:'';
data.trackleWon = !Isempty(data.trackleWon) ? trackleWon:'';
data.trackleAttmp = !Isempty(data.trackleAttmp) ? trackleAttmp:'';
data.passesWon =!Isempty(data.passesWon) ? passesWon:'';
data.passesAttmp = !Isempty(data.passesAttmp) ? passesAttmp:'';


if(Validators.Isempty(data.playername)){
    error.playername = "Player Name Is Required";
}
 if(Validators.Isempty(data.teamname)){
     error.teamname="Team Name Is Required ";
 }
if(Validators.Isempty(data.matchdata)){
    error.matchdata="Date Of Match Is Required"
}

if(Validators.Isempty(goalWon)){
    error.goalWon = "Details Are Insufficient to Analysis "
}

if(Validators.Isempty(goalAttmp)){
    error.goalAttmp = "Details Are Insufficient to Analysis "
}

if(Validators.Isempty(trackleWon)){
    error.trackleWon = "Details Are Insufficient to Analysis "

}

if(Validators.Isempty(trackleAttmp)){
    error.trackleAttmp = "Details Are Insufficient to Analysis "
}

if(Validators.Isempty(trackleAttmp)){
    error.trackleAttmp = "Details Are Insufficient to Analysis "
}

if(Validators.Isempty(passesWon)){
    error.passesWon = "Details Are Insufficient to Analysis "
}

if(Validators.Isempty(passesAttmp)){
    error.passesAttmp = "Details Are Insufficient to Analysis "
}

return{
    error,
    isValid:Isempty(error)
}


}