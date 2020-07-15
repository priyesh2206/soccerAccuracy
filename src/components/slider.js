import React from  'react';
import {Jumbotron} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import './slider.css';

const SliderImage =(props)=>{
    console.log(window.location.href)
    if(window.location.href === "http://localhost:3000/login" || window.location.href === "http://localhost:3000/signup"){
        return(
            <div></div>
        )
        }
        else{
          return (
            <div>
            <div>
            <Carousel className="size">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="assets/images/finalbg.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption >
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="assets/images/finalbg1.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="assets/images/finalbg3.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
            </Carousel>
            </div>
            {/* <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                            <h1>WELCOME TO ANCAST!</h1>
                            <p>Ancat is bursting with useful football statistics and information and Analysis the Performance on varies factors and inhaces Performance.It streams Live scores of varies Tournaments</p>
                            
                            </div>
                        </div>
                    </div>
                </Jumbotron> */}
            </div>
          );
    }
  }

export default SliderImage;