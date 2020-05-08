import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import football from './something.png'
import SliderImage  from './slider';
import "./navbar.css";

class Navbars extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isopen:true
        }
    }
    LoginHit=()=>{
        this.setState({isopen:!this.state.isopen})
    }

    render(){
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
                <Navbar.Brand href="/"><div className="heading">Ancast</div> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto bar">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup" >SignUp </Nav.Link>
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