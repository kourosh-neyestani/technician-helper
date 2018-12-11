import React from 'react';
import './style.css';
import {Row, Col} from 'react-grid-system';

class Features extends React.Component {
    render() {
        return (
            <section className="pt-90 pb-90 overlay-light overlay-image overlay-gradient">
                <span className="bg-gradient bg-gradient-90"></span>
                <div className="container">
                    <div className="pt-30 pb-30 max-w-768 div-center text-center">
                        <h3 className="mb-10 fw-100 ls--20 text-light-3">We are Awesome</h3>
                        <h2 className="fs-50 fw-600 lh-54">Engaging, purposeful, and responsive</h2>
                        <div className="divider divider-line"></div>
                    </div>
                    <Row>
                        <Col lg={4}>

                            <div className="mobile-app">
                                <div className="mobile-app-inside"></div>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>

                            <div className="text-lg-right dir-lg-rtl text-center mt-30">
                                <div className="mb-15">
                                    <button className="icon-button icon-button-md button-primary">
                                        <i className="fas fa-code"></i>
                                    </button>
                                    <h4 className="inline-block fs-21 pl-10 pr-10">Clean Code</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa.</p>
                            </div>
                            <div className="text-lg-right dir-lg-rtl text-center mt-30">
                                <div className="mb-15">
                                    <button className="icon-button icon-button-md button-primary">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <h4 className="inline-block fs-21 pl-10 pr-10">Great Support</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa.</p>
                            </div>
                            <div className="text-lg-right dir-lg-rtl text-center mt-30">
                                <div className="mb-15">
                                    <button className="icon-button icon-button-md button-primary">
                                        <i className="fas fa-desktop"></i>
                                    </button>
                                    <h4 className="inline-block fs-21 pl-10 pr-10">Unique Design</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="text-lg-left dir-lg-ltr text-center mt-30">
                                <div className="mb-15">
                                    <button className="icon-button icon-button-md button-primary">
                                        <i className="fas fa-paint-brush"></i>
                                    </button>
                                    <h4 className="inline-block fs-21 pl-10 pr-10">Modern Design</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa.</p>
                            </div>
                            <div className="text-lg-left dir-lg-ltr text-center mt-30">
                                <div className="mb-15">
                                    <button className="icon-button icon-button-md button-primary">
                                        <i className="fas fa-sun"></i>
                                    </button>
                                    <h4 className="inline-block fs-21 pl-10 pr-10">High Resolution</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa.</p>
                            </div>
                            <div className="text-lg-left dir-lg-ltr text-center mt-30">
                                <div className="mb-15">
                                    <button className="icon-button icon-button-md button-primary">
                                        <i className="fas fa-mobile-alt"></i>
                                    </button>
                                    <h4 className="inline-block fs-21 pl-10 pr-10">Fully Responsive</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        )
    }
}

export default Features;