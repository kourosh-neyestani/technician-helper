import React, { Component } from 'react';
import HomeSlider from "./components/HomeCarousel";
import Features from "../../components/Features";
import './style.css';

class Home extends Component {
    render() {
        return (
            <section className="section-home">
                <HomeSlider/>
                <Features/>
            </section>
        )
    }
}

export default Home;