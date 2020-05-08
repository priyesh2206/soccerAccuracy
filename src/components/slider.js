import React from  'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";

const SliderImage =(props)=>{
    console.log(window.location.href)
    if(window.location.href === "http://localhost:3000/login" || window.location.href === "http://localhost:3000/signup"){
        return(
            <div></div>
        )
        }
        else{
        return(
                        <div className="row">   
                         <MDBContainer>
                         <MDBCarousel
                          activeItem={1}
                          length={3}
                          showControls={true}
                          showIndicators={false}
                          className="z-depth-1"
                          slide
                         >
                          <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                              <MDBView>
                                <img
                                  className="d-block w-100"
                                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                                  alt="First slide"
                                />
                              </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                              <MDBView>
                                <img
                                  className="d-block w-100"
                                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                                  alt="Second slide"
                                />
                              </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                              <MDBView>
                                <img
                                  className="d-block w-100"
                                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                                  alt="Third slide"
                                />
                              </MDBView>
                            </MDBCarouselItem>
                          </MDBCarouselInner>
                         </MDBCarousel>
                         </MDBContainer>
                        </div>

)
    }
}

export default SliderImage;