import React from 'react'
import Navbars from "./navbar"
import NavbarOne from "./navbar1"//navabr after login//
import './dashboard.css'

class DashBoard extends React.Component{

    render(){
        return(
            <div>
             <Navbars/>
             {/* <img src='assets/images/bg2.jpg' /> */}
             
             
            </div>
        )
    }



}

export default DashBoard;