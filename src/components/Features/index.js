import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Fab from '@material-ui/core/Fab';

import './style.css';

class Features extends React.Component {
    render() {
        return (
            <section className="pt-90 pb-90 overlay-light overlay-image overlay-gradient" style={{backgroundImage: "url(" + require('./bg-1.jpg') + ")"}}>
                <span className="bg-gradient bg-gradient-90"></span>
                <Container>
                    <Row>
                        <Col lg={4} className="order-lg-2">
                            <div className="mobile-app" style={{backgroundImage: "url(" + require('./app.png') + ")"}}>
                                <div className="mobile-app-inside" style={{backgroundImage: "url(" + require('./app-inside.jpg') + ")"}}></div>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="order-lg-1">
                            <div className="text-lg-right dir-lg-rtl text-center mt-30">
                                <div className="mb-15">
                                    <Fab size="large" color="primary" aria-label="Add" className="icon-button">
                                       
                                    </Fab>
                                    <h4 className="inline-block fs-21 pl-15 pr-15">Clean Code</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa.</p>
                            </div>
                            <div className="text-lg-right dir-lg-rtl text-center mt-30">
                                <div className="mb-15">
                                    <Fab size="large" color="primary" aria-label="Add" className="icon-button">
                                       
                                    </Fab>
                                    <h4 className="inline-block fs-21 pl-15 pr-15">Great Support</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa.</p>
                            </div>
                            <div className="text-lg-right dir-lg-rtl text-center mt-30">
                                <div className="mb-15">
                                    <Fab size="large" color="primary" aria-label="Add" className="icon-button">
                                       
                                    </Fab>
                                    <h4 className="inline-block fs-21 pl-15 pr-15">Unique Design</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}  className="order-lg-3">
                            <div className="text-lg-left dir-lg-ltr text-center mt-30">
                                <div className="mb-15">
                                    <Fab size="large" color="primary" aria-label="Add" className="icon-button">
                                       
                                    </Fab>
                                    <h4 className="inline-block fs-21 pl-15 pr-15">Modern Design</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa.</p>
                            </div>
                            <div className="text-lg-left dir-lg-ltr text-center mt-30">
                                <div className="mb-15">
                                    <Fab size="large" color="primary" aria-label="Add" className="icon-button">
                                       
                                    </Fab>
                                    <h4 className="inline-block fs-21 pl-15 pr-15">High Resolution</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa.</p>
                            </div>
                            <div className="text-lg-left dir-lg-ltr text-center mt-30">
                                <div className="mb-15">
                                    <Fab size="large" color="primary" aria-label="Add" className="icon-button">
                                       
                                    </Fab>
                                    <h4 className="inline-block fs-21 pl-15 pr-15">Fully Responsive</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer piscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Features;