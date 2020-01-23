const validator = require("validator");
const isEmpty = require("is-empty")



module.exports = function validatingloginInput(data){
    let error={}


    data.username = !isEmpty(data.username) ? data.username: '';
    data.password = !isEmpty(data.password) ? data.password:'';

    if(validator.isEmpty(data.username)){
        error.username = "username is required";
    }

    if(validator.isEmpty(data.password)){
        error.password = "password iss required!"
    }
    return{
        error,
        isValid:isEmpty(error)
    }
}