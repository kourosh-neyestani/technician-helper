import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';
import AppRouter from "./AppRouter";
import * as serviceWorker from './serviceWorker';
// Theme Colors
import './App.css';

const styles = theme => ({
});
const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        "fontFamily": "\"Montserrat\", sans-serif",
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    },
    palette: {
        primary: {
            main: '#1264bc',
        },
        secondary: {
            main: '#ae39ea',
            contrastText: '#fff',
        },
    },

});



class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <AppRouter/>
            </MuiThemeProvider>
        );
    }
}





ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
