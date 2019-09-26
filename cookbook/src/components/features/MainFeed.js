
import React, { useState, useEffect } from "react";
import axios from 'axios';

import Navigation from "./Navigation";
import RecipeCard from '../crud/RecipeCard';


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
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        // * Get request for getting posts data goes HERE */
        axios.get(`https://lambdacooks.herokuapp.com/api/recipes`)
            .then(res => {
                console.log('server res:',res);
                setRecipes(res.data);
            })
            .catch(err => {
                console.log('Error in GET post api', err.response);
            })
    }, [])
    return(
        <div>
            <Navigation />
            <Grid container className={classes.root} justify='center'>
                {recipes.map(recipe => {
                    return (
                    <Grid item className={classes.gridItem} s>
                        <RecipeCard key={recipe.id}
                        title={recipe.title}
                        subheader={recipe.meal_type}
                        image={recipe.pic_url}
                        description={recipe.description}
                        instructions={recipe.instructions}
                        avatar={recipe.avatar_url}
                        />
                        </Grid>
                    )
                })}
            </Grid>

        </div>
    )
}