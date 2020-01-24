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
            className='card-image '
            style={{
              backgroundImage:
                'url(http://fullhdwall.com/wp-content/uploads/2017/08/HD-Dark-Background.jpg)',
              width: '25rem'
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>Log</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong>In</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
                label='Your UserName'
                group
                type='text'
                validate
                labelClass='white-text'
              />
              <MDBInput
                label='Your Password'
                group
                type='password'
                validate
                labelClass='white-text'
              />
              <div className='md-form pb-2'>
              
              </div>
              <MDBRow className='d-flex align-items-center mb-6'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                  >
                    LogIn
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md='10'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Not Have an account?
                  <a href='#!' className='green-text ml-1 font-weight-bold'>
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