import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavLogo from '../logos/NavLogo';
import { Link} from 'react-router-dom';

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
            <div className="menuButton">
                <Link to="/sign-in" color="inherit">Sign In</Link>
                <Link to="/sign-up" color="inherit">Sign Up</Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }