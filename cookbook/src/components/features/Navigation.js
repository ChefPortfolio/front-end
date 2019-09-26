import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import NavLogoGrey from '../logos/NavLogoGrey';
import { Link as RouterLink } from 'react-router-dom';
import { axiosWithAuth } from '../crud/utils/axiosWithAuth';
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  appbar: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  toolbar: {
    width: '80%', 
    display: 'flex', 
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
    border: 'none',
  },

  links: {
    width: 300,
    display: 'flex',
    justifyContent: 'space-around',
  },
  btn: {
    textDecoration: 'none',
    color: '#A4A4A4',
    padding: 4,
    '&:hover': {
      color: 'black',
    }
  },
  
}));

//Material UI
const HomeLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/" {...props} />
));


export default function Navigation() {
    const classes = useStyles();


  return (
    <div>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className={classes.toolbar}>
          <Link component={HomeLink}>
            <NavLogoGrey />
          </Link>
          
          <div className={classes.links}>
              <RouterLink to="/sign-in" color="inherit" className={classes.btn}>Sign In</RouterLink>
              <RouterLink to="/sign-up" color="inherit" className={classes.btn}>Sign Up</RouterLink>
              <RouterLink to='/chefportfolio' color="inherit" className={classes.btn}>Portfolio</RouterLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}