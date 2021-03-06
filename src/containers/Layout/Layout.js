import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import TableForm from '../../components/calculatorTable/TableForm'

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function Layout(props) {
    const { classes } = props;
    return (
        <MuiThemeProvider>
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Basic Calculator
          </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
        <TableForm />
        </MuiThemeProvider>


    );
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);

