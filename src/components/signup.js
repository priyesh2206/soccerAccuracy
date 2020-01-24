import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

class Signup extends React.Component{

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
             'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qorg1oGefMt-u9lkgjclIsr2lwz3T66RDsDNXs4Dx7bHWf6E&s)',
           width: '25rem',
           height:'41em',
           
         }}
       >
         <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
           <div className='text-center'>
             <h3 className='white-text mb-5 mt-4 font-weight-bold'>
               <strong>Sign</strong>
               <a href='#!' className='green-text font-weight-bold'>
                 <strong>Up</strong>
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
             label='Your Email'
             group
             type='email'
             validate
             labelClass='white-text'
           />
            <MDBInput
             label='Your Password'
             group
             type='password'
             validate
             labelClass='white-text'
           /> <MDBInput
           label='Re-Enter password'
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
                SignUp
               </MDBBtn>
             </div>
           </MDBRow>
           <MDBCol md='10'>
             <p className='font-small white-text d-flex justify-content-end'>
               Have an account?
               <a href='#!' className='green-text ml-1 font-weight-bold'>
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