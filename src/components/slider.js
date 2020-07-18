import React from  'react';
import {Jumbotron} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import './slider.css';

const SliderImage =(props)=>{
    console.log(window.location.href)
    if(window.location.href === "http://localhost:3000/login" || window.location.href === "http://localhost:3000/signup" || window.location.href === "http://localhost:3000/devops"){
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
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="assets/images/finalbg4.jpg"
                    alt="four slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="assets/images/finalbg5.jpg"
                    alt="fifth slide"
                  />
                </Carousel.Item>
            </Carousel>
            </div>
            </div>
          );
    }
  }

export default SliderImage;