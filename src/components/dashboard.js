import React from 'react'
import Navbars from "./navbar"
import BackgroundSlideshow from 'react-background-slideshow'
import bg1 from './images/bg1.jpg'
import bg2 from './images/bg2.jpg'
import bg3 from './images/bg3.jpg'
import bg4 from './images/bg4.jpg'
import './dashboard'

class DashBoard extends React.Component{

    render(){
        return(
            <div>
             <Navbars/>
            <div className="bb">
            {/* <BackgroundSlideshow images={[ bg1,bg2,bg3,bg4 ]} /> */}
            </div>

            </div>
        )
    }



}

export default DashBoard;