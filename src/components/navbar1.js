import React from 'react';
import Nav from 'react-bootstrap/Nav';
import football from './something.png'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar1.css"


class NavabarOne extends React.Component{
   logOut=()=>{
       localStorage.setItem('isLoggedIn',false);
       localStorage.setItem('User',null)
       this.props.makeMelogin()
   }

   render(){
       const username=localStorage.getItem('User')
       return(
           <div>
                <div>
                <Navbar collapseOnSelect className="color-nav" expand="xl" variant="light" >
                    <Navbar.Brand >
                    <img src={football} alt="football" 
                    width="60" height="60"
                    className="d-inline-block align-top"
                    />
                    </Navbar.Brand>
                    <Navbar.Brand href="#"><div className="heading">Ancast</div> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto bar">
                    <i className ="fa fa-user-circle  logo"></i>{"   "}
                    <NavDropdown title={username} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/playerDetails">Add Details&nbsp;&nbsp;<i className="fa fa-user-plus"></i></NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="/AnalysisDash">Analysis&nbsp;&nbsp;<i className="fa fa-diagnoses"></i></NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="/devops">Developer&nbsp;&nbsp;<i class="fas fa-code"></i></NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="/login" onClick={this.logOut}>logout&nbsp;&nbsp;<i className="fa fa-sign-in-alt"></i></NavDropdown.Item>
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