import React from 'react';
import SliderImage  from './slider';
import Nav from 'react-bootstrap/Nav';
import football from './something.png';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";

class Navbars extends React.Component{
    render(){
        return(
            <div>
            <div>
                <Navbar collapseOnSelect className="color-nav" expand="md" variant="light">
                    <Navbar.Brand href="/">
                    <img src={football} alt="football" 
                    width="60" height="60"
                    className="d-inline-block align-top"
                    />
                    </Navbar.Brand>
                <Navbar.Brand href="/"><div className="heading">Ancast</div> </Navbar.Brand>
                <Navbar.Toggle  aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto bar">
                    <Nav.Link href="/login" className="nav-link">Login</Nav.Link>
                    <Nav.Link href="/signup" className="nav-link" >SignUp</Nav.Link>
                    <Nav.Link href="/devops" className="nav-link" >Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
             </div> 
             <SliderImage /> 
             </div>
        )
      }
    }

export default Navbars;