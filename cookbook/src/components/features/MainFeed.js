
import React, { useState, useEffect } from "react";
import axios from 'axios';
//Import context
import { MainFeedContext } from '../crud/contexts/MainFeedContext'

import Navigation from "./Navigation";
import RecipeCard from '../crud/RecipeCard';
import RecipeCards from '../crud/RecipeCards';


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

export default function MainFeed(){
    const classes = useStyles();
    const [recipe, setRecipe] = useState([]);
    
    useEffect(() => {
        // * Get request for getting posts data goes HERE */
        axios.get(`https://lambdacooks.herokuapp.com/api/recipes`)
            .then(res => {
                console.log('server res:',res);
                setRecipe(res.data);
            })
            .catch(err => {
                console.log('Error in GET post api', err.response);
            })
    }, [])
    return(
        <div>
            <Navigation />
            <Grid container className={classes.root} justify='center'>
                {recipe.map(recipe => {
                    return (
                    <Grid item className={classes.gridItem} s>
                        <RecipeCard key={recipe.id}
                        title={recipe.title}
                        subheader={recipe.meal_type}
                        image={recipe.pic_url}
                        description={recipe.description}
                        instructions={recipe.instructions}
                        />
                        </Grid>
                    )
                })}
            </Grid>

        </div>
    )
}




//* Please leave this here */
// 1. Sign In & Sign Up
// 2. Profile/Dashboard // state is managed  - import UserContext
//     a. UserBio 
//     b. Posts 
//     c. Card 