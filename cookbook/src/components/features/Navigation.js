import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import NavLogo from '../logos/NavLogo';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'rgb(220,220,220)',
  },
  textField: {
    paddingBottom: '20px',
    width: '20rem',
    marginLeft: '5rem',
  },
  links: {
    marginLeft: '40px',
    width: '12rem',
    display: 'flex',
    justifyContent: 'space-around',
  },
  btn: {
    textDecoration: 'none',
    color: 'black',
  },
}));



export default function Navigation() {
    
    const classes = useStyles();

    return (
      <div>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <NavLogo />
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="standard-search"
                label="Search"
                type="search"
                className={classes.textField}
                margin="normal"
              />
            </form>
            <div className={classes.links}>
                <Link to="/sign-in" color="inherit" className={classes.btn}>Sign In</Link>
                <Link to="/sign-up" color="inherit" className={classes.btn}>Sign Up</Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }