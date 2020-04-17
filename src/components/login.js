import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import "./login.css";



class Login extends React.Component{

 render(){
     return(
         <div>
           <div className="Card">
     <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://i.pinimg.com/originals/4f/8a/18/4f8a18a2a6f9a3291bee46c24ea9ec5d.jpg)',
              width: '25rem', backgroundRepeat: 'no-repeat',backgroundSize: '100%',
            }}
          >
            <div className='text-white rgba-blue-slight py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='text-dark mb-5 mt-4 font-weight-bold'>
                  <strong>Log</strong>
                  <a className='purple-text font-weight-bold'>
                    <strong>In</strong>
                  </a>
                </h3>
              </div>
              <div>
              <MDBInput
                label='Your Username'
                icon='user'
                group
                type='text'
                validate
                labelClass='text-dark font-weight-bold'
              />
              </div>
              <MDBInput
                label='Your Password'
                icon="lock"
                group
                type='password'
                validate
                labelClass='text-dark font-weight-bold'
              />
              <div className='md-form pb-2'>
              
              </div>
              <MDBRow className='d-flex align-items-center mb-6'>
                <div className='text-center mb-3 col-md-12'>
                <a href="/PlayerDetails">
                  <MDBBtn
                    color='dark'
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                  >
                    LogIn
                  </MDBBtn>
                  </a>
                </div>
              </MDBRow>
              <MDBCol md='10'>
                <p className='font-small text d-flex justify-content-end '>
                  Not Have an account?&nbsp;&nbsp;
                  <a href='/signup' className='black-text ml-54 font-weight-bold'>
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
         </div>
     )
 }

}

export default Login;