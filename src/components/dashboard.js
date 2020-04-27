import React from 'react'
import Navbars from "./navbar"
import NavbarOne from "./navbar1"//navabr after login//
import './dashboard.css'

class DashBoard extends React.Component{
    constructor(props){
        super(props);
    }
     getComponent=()=>{
         if(localStorage.getItem("isLoggedIn")== 'true'){
            return(
                <NavbarOne  makeMelogin={this.props.makeMelogin}/>
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