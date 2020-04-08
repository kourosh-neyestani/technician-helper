import React from 'react';
import './style.css';
import {Link} from "react-router-dom";
import {Container} from "react-grid-system";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            top: false,
            scrollPositionY: 0,
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    componentDidMount() {
        return window.addEventListener('scroll', debounce(this.handleScroll))
    }

    componentWillUnmount() {
        return window.removeEventListener('scroll', debounce(this.handleScroll))
    }

    handleScroll = () => {
        const scrollPositionY = +window.scrollY;
        return this.setState({scrollPositionY})
    };
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {

        const isScrolling = !!this.state.scrollPositionY;

        return (
            <header className={(isScrolling) ? 'site-header isScrolling' : 'site-header'}>
                <Container>
                    <Fab color="inherit" size="large" aria-label="Add" onClick={this.toggleDrawer('left', true)}
                         className="button-mobile">
                        <span className="button-line"></span>
                        <span className="button-line"></span>
                        <span className="button-line"></span>
                    </Fab>
                    <Link to="/request">
                        <button type="button" className="button-request">
                            Book a Service
                        </button>
                    </Link>
                    <Menu />
                </Container>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        <SideList/>
                    </div>
                </Drawer>
            </header>
        )
    }
}

const Menu = () => {
    return (
        <nav className="header-main-menu">
            <ul>
                <li>
                    <Link to="/request">
                        <Button color="primary">
                            Request
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/request">
                        <Button color="primary">
                            Pricing
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/blog">
                        <Button color="primary">
                            About
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/blog">
                        <Button color="primary">
                            Contact
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/blog">
                        <Button color="primary">
                            Faq
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

const SideList = () => {
    return (
        <div>
            <List style={{width: 300}}>
                <ListItem button>
                    <ListItemIcon><InboxIcon/></ListItemIcon>
                    <Link to="/">
                        <ListItemText primary="Home"/>
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><InboxIcon/></ListItemIcon>
                    <Link to="/request">
                        <ListItemText primary="Request"/>
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><InboxIcon/></ListItemIcon>
                    <Link to="/about-us">
                        <ListItemText primary="About Us"/>
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><InboxIcon/></ListItemIcon>
                    <Link to="/contact-us">
                        <ListItemText primary="Contact Us"/>
                    </Link>
                </ListItem>
            </List>
        </div>
    )
};

const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait)
    }
};

export default Header;