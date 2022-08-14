import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import "./GuestPageCarousel.css"

class GuestPageCarousel extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='guest-page-carousel' >
                <div className='container-fluid' >
                
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="w-100 h-100"
                            src="/images/carsoule-image0.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                                <p>Explore Thousands of Movies: Ratings, plot etc.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            className="w-100 h-100"
                            src="/images/carsoule-image1.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                                <p>Get Recommendations from friends</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            className="w-100 h-100"
                            src="/images/carsoule-image2.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                                <p><b>Let the site recommend movies for you based on your great taste</b></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>
           
        );
    }
}

export default GuestPageCarousel;