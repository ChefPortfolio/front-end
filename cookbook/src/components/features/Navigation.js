import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import NavLogoGrey from '../logos/NavLogoGrey';
import { Link as RouterLink } from 'react-router-dom';

//Import PrivateRoute
import PrivateRoute from '../crud/PrivateRoute';

const useStyles = makeStyles(theme => ({
  toolbar: {
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
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link component={HomeLink}>
            <NavLogoGrey />
          </Link>
          
          <div className={classes.links}>
              <RouterLink to="/sign-in" color="inherit" className={classes.btn}>Sign In</RouterLink>
              <RouterLink to="/sign-up" color="inherit" className={classes.btn}>Sign Up</RouterLink>

              {/* This needs to stay a Private Route */} 
              <PrivateRoute to='/chefportfolio' color="inherit" className={classes.btn}>Portfolio</PrivateRoute>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}