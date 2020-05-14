import React from  'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import {Jumbotron} from 'react-bootstrap'
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
              <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                            <h1>WELCOME TO ANCAT!</h1>
                            <p>Ancat is bursting with useful football statistics and information and Analysis the Performance on varies factors and inhaces Performance.It streams Live scores of varies Tournaments</p>
                            
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            <div>
            <MDBContainer >
              <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              className="z-depth-1 cardSize "
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="assets/images/finalbg.jpg"
                      alt="First slide"
                    />
                  <MDBMask overlay="black-light" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive"><strong>Football Analysis Website</strong></h3>
                    <p>Analysis Yourself For Better Performance</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="assets/images/finalbg1.jpg"
                      alt="Second slide"
                    />
                  <MDBMask overlay="black-strong" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive">Provide Analysis</h3>
                    <p>Accuracy,Strength,preformance on Daily Bases As well as Montly</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="assets/images/finalbg3.png"
                      alt="Third slide"
                    />
                  <MDBMask overlay="black-slight" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive"><strong>Stream live Scores!</strong></h3>
                    <p>Varies Tournaments like FIFA World Cup,UEFA Champions League</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
            </MDBContainer>
            </div>
            </div>





          );
    }
  }

export default SliderImage;