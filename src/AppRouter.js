import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Request from "./scenes/Request";
import Home from "./scenes/Home";
import Header from "./components/Header";

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/request" component={Request}></Route>
                    <Header/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/gallery" component={Gallery}/>

                    {/* Requests */}

                    {/*<Route path="/faq" component={Faq}></Route>*/}
                </div>
            </Router>
        );
    }
}

const About = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}
const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}
const Services = () => {
    return (
        <div>
            <h1>Services</h1>
        </div>
    )
}
const Gallery = () => {
    return (
        <div>
            <h1>Gallery</h1>
        </div>
    )
}
export default AppRouter;
