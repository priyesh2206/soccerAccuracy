import React from 'react'
import Navbars from "./navbar"
import bg1 from './images/bg1.jpg'
import bg2 from './images/bg2.jpg'
import bg3 from './images/bg3.jpg'
import bg4 from './images/bg4.jpg'
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