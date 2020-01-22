const isempty = require("is-empty");
const validator = require("validator");

module.exports = function validatingloginInput(data){
    let error={}


    data.username = !isempty(data.username) ? data.username: '';
    data.password = !isempty(data.password) ? data.password:'';

    if(validator.isempty(data.username)){
        error.username = "username is required";
    }

    if(validator.isempty(data.password)){
        error.password = "password iss required!1"
    }
    return{
        error,
        isValid:isempty(error)
    }
}