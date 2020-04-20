import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import axios from "axios";

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


onSubmit= e=>{
  const newUser={
    username:this.state.username,
    email:this.state.email,
    password:this.state.password,
    password2:this.state.password2
  }
  console.log(newUser);
  axios.post("http://localhost:6000/api/users/register",newUser).then(data=>{
    console.lof(data);
  })
};


render(){
  console.log(this.state.username)
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
             'url(https://i.pinimg.com/originals/4f/8a/18/4f8a18a2a6f9a3291bee46c24ea9ec5d.jpg)',
           width: '25rem',
           backgroundRepeat:'no-repeat',
           backgroundSize: '111%'

           
         }}
       >
         <div className='text-white rgba-blue-slight py-5 px-5 z-depth-4'>
           <div className='text-center'>
             <h3 className='text-dark mb-5 mt-4 font-weight-bold'>
               <strong>Sign</strong>
               <a className='purple-text font-weight-bold'>
                 <strong>Up</strong>
               </a>
             </h3>
           </div>
           <MDBInput
             label='Your UserName'
             onChange={this.changeUserName}
             error={error.username}
             icon="user"
             group
             type='text'
             validate
             labelClass='text-dark font-weight-bold'
           />
          
           <MDBInput
             label='Your Email'
             icon="envelope"
             group
             type='email'
             validate
             labelClass='text-dark font-weight-bold'
           />
            <MDBInput
             label='Your Password'
             icon="lock"
             group
             type='password'
             validate
             labelClass='text-dark font-weight-bold'
           /> <MDBInput
           label='Re-Enter password'
           icon="exclamation-triangle"
           group
           type='password'
           validate
           labelClass='text-dark font-weight-bold'
         />
           <div className='md-form pb-2'>
           
           </div>
           <MDBRow className='d-flex align-items-center mb-6'>
             <div className='text-center mb-3 col-md-12'>
               <MDBBtn
                 color='dark'
                 rounded
                 type='button'
                 className='btn-block z-depth-1'
               >
                SignUp
               </MDBBtn>
             </div>
           </MDBRow>
           <MDBCol md='10'>
             <p className='font-medium white-text d-flex justify-content-end'>
               Have an account?&nbsp;&nbsp;
               <a href="/login"className='black-text ml-54 font-weight-bold'>
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