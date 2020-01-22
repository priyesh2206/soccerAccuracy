const isempty = require('is-empty');
const validator = require("validator");

module.exports = function validatingregisterInput(data){
  let error ={} 

  data.username = !isempty(data.username) ? data.username:'';
  data.email = !isempty(data.email) ? data.email:'';
  data.password=!isempty(data.password) ? data.password:'';
  data.password2 = !isempty(data.password2) ? data.password2:'';


  if(validator.isempty(data.username)){
      error.username = "username is required";
  }
  if(validator.isempty(data.email)){
      error.email = "email is required!!";
  }
  else if(!validator.isempty(data.email)){
      error.email = "email is not valid";
  }
  if(validator.isempty(password)){
      error.password = "password is required!!"
  }
  if(validator.isempty(data.password2)){
      error.password2 = "repassword is required";
  }
  if (validator.islength(data.password,{min:6,max:20})){
  error.password = "password atleast have min 6 characters"
  }
  if(validator.equal(password,password2)){
      error.password2 = "repassword doesn't match plz check"
  }
  return {
     error,
     isValid:isempty(error)
  }

}