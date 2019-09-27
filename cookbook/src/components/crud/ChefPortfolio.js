///* THIS IS WHERE CHEFS CAN CREATE THEIR PORTFOLIO */

import React, { useState, useEffect, useContext } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { ChefContext } from '../../App';
import Chef from './Chef';
import ProfileNavigation from '../features/ProfileNavigation';
import RecipeCard from './RecipeCard';
import Footer from '../features/Footer'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import Navigation from '../features/Navigation';

import { NavLink } from 'react-router-dom';


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
////////////

const ChefPortfolio = () => {
    const classes = useStyles();

    const context = useContext(ChefContext);
  // const [chef, setChef] = useState([]);
  // const [newRecipe, setNewRecipe] = useState({
  //   title: '',
  //   description: '',
  //   instructions: '',
  //   meal_type: '',
  //   chef_id: 0,
  //   pic_url: ''
  // });

  // useEffect(() => {
  //   // * Get request for getting posts data goes HERE */

  //   const id = localStorage.getItem('chef_id');

  //   //* When backend delivers an id, need to get id to localStorage instead of hard code */
  //   axiosWithAuth()
  //     .get(`https://chefbook-stacy.herokuapp.com/api/chefs/${id}/recipes`)
  //     .then(res => {
  //       console.log('GET request for a recipe for a chef', res);
  //       setChef(res.data);
  //     })
  //     .catch(err => {
  //       console.log('Error in GET request for a recipe for a chef', err.response);
  //     });
  // }, [chef]);
  // console.log(chef);

  return (
    <>
      <Navigation />     
      <ProfileNavigation />

      <Chef chef={context.chef} />

      <NavLink to='/addRecipe'>Add Recipe</NavLink>      
      <Grid container className={classes.root} justify="center">
        {context.chef.map(recipe => {
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
                recipeId={recipe.id}
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
