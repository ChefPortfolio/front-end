///* THIS IS WHERE CHEFS CAN CREATE THEIR PORTFOLIO */

import React, { useState, useEffect, useReducer } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';

import Chef from './Chef';
import Navigation from '../features/Navigation';
import RecipeCard from './RecipeCard';
import Footer from '../features/Footer'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      margin: '75px auto'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    gridItem: {
        padding: theme.spacing(2),
    },

  }));

const ChefPortfolio = () => {
    const classes = useStyles();
  const [chef, setChef] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    description: '',
    instructions: '',
    meal_type: '',
    chef_id: '',
    pic_url: ''
  });

  useEffect(() => {
    // * Get request for getting posts data goes HERE */
    // const id = localStorage.getItem('user_id');

    //* When backend delivers an id, need to get id to localStorage instead of hard code */
    axiosWithAuth()
      .get(`https://chefbook-stacy.herokuapp.com/api/recipes`)
      .then(res => {
        console.log('GET request for chefs', res);
        setChef(res.data);
      })
      .catch(err => {
        console.log('Error in GET request for chefs', err.response);
      });
  }, []);
  // console.log(chef);

  // const handleChanges = e => {
  //     setNewChef({...newChef, [e.target.name]: e.target.value});
  // };

  const addRecipe = e => {
    e.preventDefault();
    //* POST request for adding a recipe goes HERE */

    //* Need to grab from localStorage */

    // const id = '1';
    axiosWithAuth()
      .post(`https://chefbook-stacy.herokuapp.com/api/recipes/`, newRecipe)
      .then(res => {
        console.log('POST request for addRecipe', res);
        setNewRecipe(res.data);
      })
      .catch(err => {
        console.log('Error in POST request for addRecipe', err.response);
      });
    setNewRecipe('');
  };

  return (
    <>
      {/* <form>
                <div className="new-recipe-form">
                    <input
                        type="text"
                        name="title"
                        value={newRecipe.title}
                        // onChange={handleChanges}
                    />
                </div>

                <div className="new-recipe-form">
                    <input
                        type="text"
                        name="title"
                        value={newRecipe.title}
                        // onChange={handleChanges}
                    />
                </div>
                    <button type="submit" onClick={addRecipe}>Submit</button>
            </form> */}
      <Navigation />
      <Chef chef={chef} />
      {/* {chef.recipes.map(recipe => {
                        return <RecipeCard props={chef.recipes} />
                    })} */}
      <Grid container className={classes.root} justify="center">
        {chef.map(recipe => {
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
      {/* {chef.map(recipe => {
        return (
          <RecipeCard
            title={recipe.title}
            description={recipe.description}
            instructions={recipe.instructions}
            meal_type={recipe.meal_type}
            pic_url={recipe.pic_url}
          />
        );
      })}
      ; */}
      <Footer />
    </>
  );
};

export default ChefPortfolio;
