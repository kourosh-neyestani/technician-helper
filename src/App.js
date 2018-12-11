import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';
import AppRouter from "./AppRouter";
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

export default withStyles(styles)(App);
