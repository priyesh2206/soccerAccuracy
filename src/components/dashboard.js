import React from 'react'
import Navbars from "./navbar"
import './dashboard.css'

class DashBoard extends React.Component{

    render(){
        return(
            <div>
             <Navbars/>
             {/* <div id="container">
                <img class = "img1" src={bg1}/>
                <img src={bg2}/>
                <img src={bg3}/>
                <img src={bg4}/>
            </div> */}
            </div>
        )
    }



}

export default DashBoard;