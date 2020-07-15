import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import axios from "axios";
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
class Signup extends React.Component{

  constructor(props){
    super(props);
      this.state ={
        username:"",
        email:"",
        password:"",
        password2:"",
        error:{}
    }
  }
  changeUserName=(event)=>{
    this.setState({username:event.target.value})
  }
  changeEmail=(event)=>{
    this.setState({email:event.target.value})
  }

  changePassword=(event)=>{
    this.setState({password:event.target.value})
  }
  changePassword2=(event)=>{
    this.setState({password2:event.target.value})
  }
  
  onSubmit=e=>{
    const newUser={
      username:this.state.username,
      email:this.state.email,
      password:this.state.password,
      password2:this.state.password2
    }
    console.log(newUser);
    axios.post("http://localhost:5000/api/users/register",newUser).then((data)=>{
      if(data.data.success === true){
        toast.success((data.data.message), {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      else{
        toast.error((data.data.message), {
          position: toast.POSITION.TOP_CENTER
        });
      }
    
    });

  };


render(){
  
  const {error} =this.state
  return(
  <div>
    <div className="Card">
        <MDBContainer>
         <MDBRow>
           <MDBCol md='6'>
                  <MDBCard
                    className='card-image '
                    style={{
                      backgroundImage:
                        'url(assets/images/login.jpg)',
                      width: '25rem',
                      backgroundRepeat:'no-repeat',
                      backgroundSize: '111%'  
                    }}
                  >
               <div className='text-white rgba-blue-slight py-5 px-5 z-depth-4'>
                   <div className='text-center'>
                     <h3 className='text-white mb-5 mt-4 font-weight-bold'>
                       <strong>Sign</strong>
                       <a  className='purple-text font-weight-bold'>
                         <strong>Up</strong>
                       </a>
                     </h3>
                   </div>
                  
                   <MDBInput className="InputTEXT"
                     label='Your UserName'
                     onChange={this.changeUserName}
                     error={error.username}
                     icon="user"
                     group
                     type='text'
                     validate
                     labelClass='text-white font-weight-bold'
                   />

                   <MDBInput className="InputTEXT"
                     label='Your Email'
                     onChange={this.changeEmail}
                     error={error.email}
                     icon="envelope"
                     group
                     type='email'
                     validate
                     labelClass='text-white font-weight-bold'
                   />

                    <MDBInput className="InputTEXT"
                    label='Your Password'
                    onChange={this.changePassword}
                    error={error.password}
                    icon="lock"
                    group
                    type='password'
                    validate
                    labelClass='text-white font-weight-bold'
                    /> 

                    <MDBInput className="InputTEXT"
                    label='Re-Enter password'
                    onChange={this.changePassword2}
                    error={error.password2}
                    icon="exclamation-triangle"
                    group
                    type='password'
                    validate
                    labelClass='text-white font-weight-bold'
                    />

                    <MDBRow className='d-flex align-items-center mb-6'>
                        <div className='text-center mb-3 col-md-12'>
                          <Link to='/login'>
                            <MDBBtn
                              color='green'
                              rounded
                              type='button'
                              className='btn-block z-depth-1'
                              onClick = {this.onSubmit}
                            >
                            SignUp
                            </MDBBtn>
                            </Link>
                        </div>
                    </MDBRow>
                  
                    <MDBCol md='10'>
                          <p className='font-medium white-text d-flex justify-content-end'>
                              Have an account?&nbsp;&nbsp;
                              <a href="/login"className='purple-text ml-54 font-weight-bold'>
                              LogIn
                              </a>
                          </p>
                    </MDBCol>

               </div>
             </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>          
    </div>
  </div>
  )
}
}
export default Signup;