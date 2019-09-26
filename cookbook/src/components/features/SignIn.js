import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import OrangeEmblem from '../logos/OrangeEmblem';
import {axiosWithAuth} from "../crud/utils/axiosWithAuth"
import {Link as RouterLink} from "react-router-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        CookBook
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//Material UI
const HomeLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/" {...props} />
));

const SignUpLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/sign-up" {...props} />
));

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  outlinedRoot: {
    '&:hover $notchedOutline': {
      borderColor: 'red'
    },
    '&$focused $notchedOutline': {
      borderColor: 'green',
      borderWidth: 1
    }
  },
  notchedOutline: {},
  focused: {},
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: `#141c26`,
    '&:hover': {
      backgroundColor: '#D96704'
    }
  }
}));


const SignIn= props => {
  const classes = useStyles();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChanges = e => {
    console.log(user);
    setUser({...user, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('https://chefbook-stacy.herokuapp.com/api/auth/login', user)
      .then(res => {
        // console.log(res.data);
        localStorage.setItem('token', res.data.token);

        //* Backend to deliver id in payload, set local id to storage */
        // localStorage.setItem('user_id', res.data.id);
        props.history.push('/chefportfolio');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Link component={HomeLink}>
          <OrangeEmblem />
        </Link>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleChanges}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChanges}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onChange={handleChanges}
            onClick={submitForm}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{ color: '#141C26' }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={SignUpLink} variant="body2" style={{ color: '#141C26' }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignIn;