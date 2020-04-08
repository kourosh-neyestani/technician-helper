import React, {Component} from 'react';
import Slider from "react-slick";
import {Container} from "react-grid-system";
//
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";

class HomeSlider extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nav: true
        };
        return (
            <div className="hero-carousel">
                <Slider {...settings}>
                    <div className="carousel-item">
                        <div className="carousel-inner">
                            <Container>
                                <h3 className="caption">We are Awesome</h3>
                                <h2 className="title">Engaging, purposeful, and responsive</h2>
                                <div className="divider divider-dots"></div>
                                <Link to="/request">
                                    <Button variant="contained" size="large" color="primary" type="submit"
                                            style={{marginRight: 3, marginLeft: 3, marginTop: 6}}>
                                        Book a service
                                    </Button>
                                </Link>
                                <Link to="/code">
                                    <Button variant="contained" size="large" color="secondary" type="submit"
                                            style={{marginRight: 3, marginLeft: 3, marginTop: 6}}>
                                        Follw request
                                    </Button>
                                </Link>
                            </Container>
                        </div>
                        <span className="carousel-cover"
                              style={{backgroundImage: "url(" + require('./pat.png') + ")"}}></span>
                        <div className="carousel-image"
                             style={{backgroundImage: "url(" + require('./slide-1.jpg') + ")"}}></div>

                    </div>
                    <div className="carousel-item">
                        <div className="carousel-inner">
                            <Container>
                                <h3 className="caption">We are Awesome</h3>
                                <h2 className="title">Home maintenance made simple</h2>
                                <div className="divider divider-dots"></div>
                                <Link to="/request">
                                    <Button variant="contained" size="large" color="primary" type="submit"
                                            style={{marginRight: 3, marginLeft: 3, marginTop: 6}}>
                                        Book a service
                                    </Button>
                                </Link>
                                <Link to="/code">
                                    <Button variant="contained" size="large" color="default" type="submit"
                                            style={{marginRight: 3, marginLeft: 3, marginTop: 6}}>
                                        Follw request
                                    </Button>
                                </Link>
                            </Container>
                        </div>
                        <span className="carousel-cover"
                              style={{backgroundImage: "url(" + require('./pat.png') + ")"}}></span>
                        <div className="carousel-image"
                             style={{backgroundImage: "url(" + require('./slide-2.jpg') + ")"}}></div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default HomeSlider;