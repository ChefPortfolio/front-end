import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import NavLogoGrey from '../logos/NavLogoGrey';
import { Link as RouterLink } from 'react-router-dom';
import { axiosWithAuth } from '../crud/utils/axiosWithAuth';
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#F2F2F2',
    border: 'none',
  },
  textField: {
    paddingBottom: '1.5rem',
    width: '25rem',
    color: '#A4A4A4',
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
    const [recipe, setRecipe] = React.useState([]);
    const [query, setQuery] = React.useState('');

    React.useEffect(() => {
      axios
      .get(`https://lambdacooks.herokuapp.com/api/recipes`)
      .then(res => {
        const data= res.data;
        const result = data.filter(post =>
          post.recipe.toLowerCase().includes(query.toLowerCase())
        );
        setRecipe(result);
      });
    }, [query]);
    
    const handleInputChange = e => {
      setQuery(e.target.value);
    };

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link component={HomeLink}>
            <NavLogoGrey />
          </Link>
          <form className={classes.container} noValidate autoComplete="off">
            
            <TextField
              id="standard-search"
              label={<SearchIcon></SearchIcon>}
              type="search"
              onChange={handleInputChange}
              value={query}
              className={classes.textField}
              margin="normal"
            />
          </form>
          <div className={classes.links}>
              <a href="#">Sign Out</a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}