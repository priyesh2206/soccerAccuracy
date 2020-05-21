const Validators = require('validator');
const isEmpty = require('is-empty')


module.exports = function  ValidatorsInputDetails(data){
    let error ={};

data.playername = !isEmpty(data.playername)? data.playername:'';
data.teamname = !isEmpty(data.teamname) ? data.teamname:'';
data.matchdate = !isEmpty(data.matchdate) ?data.matchdate:'';
data.goalWon = !isEmpty(data.goalWon) ? data.goalWon:'';
data.goalAttmp=!isEmpty(data.goalAttmp) ? data.goalAttmp:'';
data.tackleWon = !isEmpty(data.tackleWon) ? data.tackleWon:'';
data.tackleAttmp = !isEmpty(data.tackleAttmp) ? data.tackleAttmp:'';
data.passesWon =!isEmpty(data.passesWon) ? data.passesWon:'';
data.passesAttmp = !isEmpty(data.passesAttmp) ? data.passesAttmp:'';

//erors in validations
if(Validators.isEmpty(data.playername)){
    error.playername = "Player Name Is Required";
}
 if(Validators.isEmpty(data.teamname)){
     error.teamname="Team Name Is Required ";
 }
if(Validators.isEmpty(data.matchdate)){
    error.matchdate="Date Of Match Is Required"
}

if(Validators.isEmpty(data.goalWon)){
    error.goalWon = "Details Are Insufficient to Analysis "
}

if(Validators.isEmpty(data.goalAttmp)){
    error.goalAttmp = "Details Are Insufficient to Analysis "
}

if(Validators.isEmpty(data.tackleWon)){
    error.tackleWon = "Details Are Insufficient to Analysis "
}

if(Validators.isEmpty(data.tackleAttmp)){
    error.tackleAttmp = "Details Are Insufficient to Analysis "
}

if(Validators.isEmpty(data.tackleAttmp)){
    error.tackleAttmp = "Details Are Insufficient to Analysis "
}

if(Validators.isEmpty(data.passesWon)){
    error.passesWon = "Details Are Insufficient to Analysis "
}

if(Validators.isEmpty(data.passesAttmp)){
    error.passesAttmp = "Details Are Insufficient to Analysis "
}

return{
    error,
    isValid:isEmpty(error)
}


}