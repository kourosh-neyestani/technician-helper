import React, {Component} from 'react'
import {Container} from 'react-grid-system';
import {Link} from "react-router-dom";
import './style.css';

class Header extends Component {
    render() {
        return (
            <header className="site-header">
                <Container>
                    <Menu/>
                </Container>
            </header>
        )
    }
}

const Menu = () => {
    return (
        <nav className="header-main-menu">
            <ul>
                <li>
                    <a href="/" className="header-logo">
                        <img src="https://d7gh5vrfihrl.cloudfront.net/website/puls-logo.svg" alt="site name"/>
                    </a>
                </li>
                <li>
                    <Link to="/request">Request</Link>
                </li>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Header;
