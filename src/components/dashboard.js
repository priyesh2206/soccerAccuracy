import React from 'react'
import Navbars from "./navbar"
import NavbarOne from "./navbar1"//navabr after login//
import './dashboard.css'
import PlayerDetails from './playerdetails';
import {Jumbotron,Container} from 'react-bootstrap'

class DashBoard extends React.Component{
    constructor(props){
        super(props);
    }
     getComponent=()=>{
         if(localStorage.getItem("isLoggedIn")== 'true'){
            return(
                <div>
                <NavbarOne />
                <PlayerDetails/>
                </div>
            )
         }
         else{
             return(
                 <div>
                 <Navbars/>
                 </div>
             )
         }
     }

    render(){
        console.log(localStorage.getItem('isLoggedIn'))
        return(
            <div>
             {this.getComponent()}
            </div>
        )
    }


}

export default DashBoard;