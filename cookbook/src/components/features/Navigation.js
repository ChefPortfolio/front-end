import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import {Route} from "react-router-dom";
import NavLogo from '../logos/NavLogo';
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justify: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navigation() {
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <NavLogo />
            <menuButton>
                <Link to="" color="inherit">Sign In</Link>
                <Link to="" color="inherit">Sign Up</Link>
            </menuButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }