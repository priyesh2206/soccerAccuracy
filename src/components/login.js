import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { toast} from 'react-toastify';
import ParticleLogin from './particle1';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput} from 'mdbreact';
import "./login.css";


toast.configure();
class Login extends React.Component{
   constructor(props){
     super(props);

     this.state={
       loginOpen:true,
       username:'',
       password:'',
       isopen:false
     }
     this.changeState = this.changeState.bind(this) 
   }

   onChangeusername=(event)=>{
     this.setState({username:event.target.value})
   }
   onChangepassword=(event)=>{
     this.setState({password:event.target.value})
   }

   changeState(event){
     const User = {
       username:this.state.username,
       password:this.state.password
     }
 
     axios.post("http://localhost:5000/api/users/login",User).then((data)=>{
       if(data.data.success === true){
         toast.success(" User Loggged In Success!", {
          position: toast.POSITION.TOP_CENTER,
        });
         console.log("User is LoggedIn")
         localStorage.setItem("isLoggedIn",true);
         localStorage.setItem("User",User.username);
         this.props.makeMelogin()
       }
       else{
          toast.error((data.data.message), {
          position: toast.POSITION.TOP_CENTER
        });
        event.preventDefault()
       }
     })
   }

 render(){
  return(
    <div>
      {this.state.loginOpen?(
        <div>
        <ParticleLogin/>
      <div className="Card">
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
                <MDBCard
                  className='card-image'
                   style={{
                     backgroundImage:
                       'url(assets/images/login.jpg)',
                     width: '25rem', 
                     backgroundRepeat: 'repeat',
                     backgroundSize: '100%',
                   }}
                >

            <div className='text-white rgba-blue-slight py-5 px-5 z-depth-4'>
                        <div className='text-center'>
                           <h3 className='text-white mb-5 mt-4 font-weight-bold'>
                              <strong>Log</strong>
                               <a className='green-text font-weight-bold'>
                               <strong>In</strong>
                               </a>
                           </h3>
                        </div>
                      <div>
                      <MDBInput className="InputTEXT"
                        label='Your Username'
                        onChange={this.onChangeusername}
                        icon='user'
                        group
                        type='text'
                        validate
                        labelClass='text-white font-weight-bold'
                      />
                      </div>

                      <MDBInput className="InputTEXT"
                        label='Your Password'
                        onChange={this.onChangepassword}
                        icon="lock"
                        group
                        type='password'
                        validate
                        labelClass='text-white font-weight-bold'
                      />

                     <MDBRow className='d-flex align-items-center mb-6'>
                      <div className='text-center mb-3 col-md-12'>
                        <Link to="/playerDetails">
                            <MDBBtn
                              color='green'
                              rounded
                              type='button'
                              className='btn-block z-depth-1'
                              onClick={this.changeState}
                            >
                            LogIn
                            </MDBBtn>
                        </Link>
                      </div>

                     </MDBRow>
                     <MDBCol md='10'>
                        <p className='font-small text d-flex justify-content-end '>
                          Not Have an account?&nbsp;&nbsp;
                          <a href='/signup' className='purple-text ml-54 font-weight-bold'>
                           SignUp
                          </a>
                        </p>
                     </MDBCol>

            </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>    
      </div>
      </div>)
      :(
        null
      )
      }
    </div>
  )
 }
}
export default Login;