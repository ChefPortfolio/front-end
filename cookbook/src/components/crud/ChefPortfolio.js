///* THIS IS WHERE CHEFS CAN CREATE THEIR PORTFOLIO */

import React, { useState, useEffect, useReducer } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';

import Chef from './Chef';
import Navigation from '../features/Navigation';
import RecipeCard from './RecipeCard';

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

const dummyChef = {
  first_name: 'Tom',
  last_name: 'Tom',
  location: 'Tomtown',
  contact: '111',
  username: 'tomtom'
};

// const dummyRecipes = [
//   {
//     title: 'Hot Ham and Cheese Sandwiches',
//     description: 'Do not settle for ordinary ham and cheese sandwiches...',
//     instructions: 'Preheat oven to 250 degrees F (120 degrees C)...',
//     meal_type: 'lunch',
//     pic_url: ''
//   },
//   {
//     title: 'Old Fashioned Pancakes',
//     description: 'This is a great recipe...',
//     instructions: 'In a large bowl, sift together...',
//     meal_type: 'breakfast',
//     pic_url: ''
//   },
//   {
//     title: 'Gouda and Spinach Stuffed Pork Chops',
//     description: 'This turned out absolutely delicious!!',
//     instructions: 'Preheat the oven to 400 degrees...',
//     meal_type: 'dinner',
//     pic_url: ''
//   }
// ];

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

    const id = localStorage.getItem('chef_id');

    //* When backend delivers an id, need to get id to localStorage instead of hard code */
    axiosWithAuth()
      .get(`https://chefbook-stacy.herokuapp.com/api/chefs/${id}/recipes`)
      .then(res => {
        console.log('GET request for a recipe for a chef', res);
        setChef(res.data);
      })
      .catch(err => {
        console.log('Error in GET request for a recipe for a chef', err.response);
      });
  }, []);
  // console.log(chef);

  const handleChanges = e => {
      setNewRecipe({...newRecipe, [e.target.name]: e.target.value});
  };

  const addRecipe = e => {
    e.preventDefault();
    //* POST request for adding a recipe goes HERE */

    //* Need to grab from localStorage */
    const id = localStorage.getItem('chef_id');

    
    axiosWithAuth().post(`https://chefbook-stacy.herokuapp.com/api/recipes/`, newRecipe)
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
      <form>
                <div className="new-recipe-form">
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={newRecipe.title}
                        onChange={handleChanges}
                    />
                </div>

                <div className="new-recipe-form">
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        value={newRecipe.description}
                        onChange={handleChanges}
                    />
                </div>

                <div className="new-recipe-form">
                    <input
                        type="text"
                        name="instructions"
                        placeholder="instructions"
                        value={newRecipe.instructions}
                        onChange={handleChanges}
                    />
                </div>

                <div className="new-recipe-form">
                    <input
                        type="text"
                        name="meal_type"
                        placeholder="Meal Type"
                        value={newRecipe.meal_type}
                        onChange={handleChanges}
                    />
                </div>

                <div className="new-recipe-form">
                    <input
                        type="text"
                        name="chef_id"
                        placeholder="Chef ID"
                        value={newRecipe.chef_id}
                        onChange={handleChanges}
                    />
                </div>
              </form>
              <button type="submit" onClick={addRecipe}>Submit</button>
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
      {/* {dummyRecipes.map(recipe => {
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
    </>
  );
};

export default ChefPortfolio;
