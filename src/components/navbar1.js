import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import football from './something.png'
import "./navbar1.css"


class NavabarOne extends React.Component{
   constructor(props){
       super(props)
       
   }

   render(){
       const username=localStorage.getItem('User')
       return(
           <div>
                <div>
                <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" >
                    <Navbar.Brand href="/">
                    <img src={football} alt="football" 
                    width="60" height="60"
                    className="d-inline-block align-top"
                    />
                    </Navbar.Brand>
                    <Navbar.Brand href="/"><div className="heading">Football</div> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto bar">
                    <i className ="fa fa-user-circle  logo"></i>{"   "}
                    <NavDropdown title={username} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Add Details&nbsp;&nbsp;<i className="fa fa-user-plus"></i></NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action/3.1">logout&nbsp;&nbsp;<i className="fa fa-sign-in-alt"></i></NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
             </div>            
           </div>
       )
   }





}
export default NavabarOne;