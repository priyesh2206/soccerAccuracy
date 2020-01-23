const validator = require("validator");
const isEmpty = require('is-empty');


module.exports = function validatingregisterInput(data){
  let error ={} 

  data.username = !isEmpty(data.username) ? data.username:'';
  data.email = !isEmpty(data.email) ? data.email:'';
  data.password=!isEmpty(data.password) ? data.password:'';
  data.password2 = !isEmpty(data.password2) ? data.password2:'';


  if(validator.isEmpty(data.username)){
      error.username = "username is required";
  }
  if(validator.isEmpty(data.email)){
      error.email = "email is required!!";
  }
  else if(!validator.isEmail(data.email)){
      error.email = "email is not valid";
  }
  if(validator.isEmpty(data.password)){
      error.password = "password is required!!"
  }
  if(validator.isEmpty(data.password2)){
      error.password2 = "repassword is required";
  }
  if (!validator.isLength(data.password,{min:6,max:20})){
      error.password = "password atleast have min 6 characters"
  }
  if(!validator.equals(data.password,data.password2)){
      error.password2 = "repassword doesn't match plz check"
  }
  return {
     error,
     isValid:isEmpty(error)
  }

}