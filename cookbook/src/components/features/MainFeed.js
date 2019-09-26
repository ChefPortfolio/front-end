import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navigation from './Navigation';
import RecipeCard from '../crud/RecipeCard';
import Footer from './Footer';

// Material UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '75px auto'
  },
  container: {
    marginTop: -80
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  gridItem: {
    padding: theme.spacing(2)
  },
  textField: {
    paddingBottom: '1.5rem',
    width: '25rem',
    color: '#A4A4A4'
  }
}));

export default function MainFeed() {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState('');

  React.useEffect(() => {
    axios.get(`https://chefbook-stacy.herokuapp.com/api/recipes`).then(res => {
      const data = res.data;
      const result = data.filter(recipe =>
        recipe.title.toLowerCase().includes(query.toLowerCase())
      );
      console.log(result);
      setRecipes(result);
    });
  }, [query]);

  const handleInputChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  useEffect(() => {
    // * Get request for getting posts data goes HERE */
    axios
      .get(`https://chefbook-stacy.herokuapp.com/api/recipes`)
      .then(res => {
        console.log('server res:', res);
        setRecipes(res.data);
      })
      .catch(err => {
        console.log('Error in GET post api', err.response);
      });
  }, []);
  return (
    <div>
      <Navigation />
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
      <Grid container className={classes.root} justify="center">
        {recipes.map(recipe => {
          return (
            <Grid item className={classes.gridItem} s>
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                // subheader={recipe.meal_type}
                image={recipe.pic_url}
                description={recipe.description}
                instructions={recipe.instructions}
                avatar={recipe.avatar_url}
              />
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
}
