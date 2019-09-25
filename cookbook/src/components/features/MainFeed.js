
import React, { useState, useEffect } from "react";
import axios from 'axios';
//Import context
import { MainFeedContext } from '../crud/contexts/MainFeedContext'

import Navigation from "./Navigation";
import RecipeCard from '../crud/RecipeCard';
import RecipeCards from '../crud/RecipeCards';


import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'



import Navigation from "./Navigation"

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


const  MainFeed = () => {

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


const DummyData = [
    {
      "title": "Hot Ham and Cheese Sandwiches",
      "description": "Do not settle for ordinary ham and cheese sandwiches...",
      "instructions": "Preheat oven to 250 degrees F (120 degrees C)...",
      "meal_type": "lunch",
      "pic_url": ""
    },
    {
      "title": "Old Fashioned Pancakes",
      "description": "This is a great recipe...",
      "instructions": "In a large bowl, sift together...",
      "meal_type": "breakfast",
      "pic_url": ""
    },
    {
      "title": "Gouda and Spinach Stuffed Pork Chops",
      "description": "This turned out absolutely delicious!!",
      "instructions": "Preheat the oven to 400 degrees...",
      "meal_type": "dinner",
      "pic_url": ""
    },
    {
        "title": "Hot Ham and Cheese Sandwiches",
        "description": "Do not settle for ordinary ham and cheese sandwiches...",
        "instructions": "Preheat oven to 250 degrees F (120 degrees C)...",
        "meal_type": "lunch",
        "pic_url": ""
      },
      {
        "title": "Old Fashioned Pancakes",
        "description": "This is a great recipe...",
        "instructions": "In a large bowl, sift together...",
        "meal_type": "breakfast",
        "pic_url": ""
      },
      {
        "title": "Gouda and Spinach Stuffed Pork Chops",
        "description": "This turned out absolutely delicious!!",
        "instructions": "Preheat the oven to 400 degrees...",
        "meal_type": "dinner",
        "pic_url": ""
      },
      {
        "title": "Hot Ham and Cheese Sandwiches",
        "description": "Do not settle for ordinary ham and cheese sandwiches...",
        "instructions": "Preheat oven to 250 degrees F (120 degrees C)...",
        "meal_type": "lunch",
        "pic_url": ""
      },
      {
        "title": "Old Fashioned Pancakes",
        "description": "This is a great recipe...",
        "instructions": "In a large bowl, sift together...",
        "meal_type": "breakfast",
        "pic_url": ""
      },
      {
        "title": "Gouda and Spinach Stuffed Pork Chops",
        "description": "This turned out absolutely delicious!!",
        "instructions": "Preheat the oven to 400 degrees...",
        "meal_type": "dinner",
        "pic_url": ""
      },
  ]

export default function MainFeed(){
    const classes = useStyles();
    return(
        <div>
            <Navigation />

            {recipe.map(card => {
                return <RecipeCard title={card.title} description={card.description} />
            })}
            {console.log('recipe after setState:', recipe)}
            

            <Grid container className={classes.root} justify='center'>
                {DummyData.map(recipe => {
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


export default MainFeed;


//* Please leave this here */
// 1. Sign In & Sign Up
// 2. Profile/Dashboard // state is managed  - import UserContext
//     a. UserBio 
//     b. Posts 
//     c. Card 