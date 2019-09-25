import React, { useState, useEffect } from "react";
import axios from 'axios';
//Import context
import { MainFeedContext } from '../crud/contexts/MainFeedContext'

import Navigation from "./Navigation";
import RecipeCard from '../crud/RecipeCard';
import RecipeCards from '../crud/RecipeCards';



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

    return(
        <div className="MainFeedWrapper">
            <Navigation />
            {recipe.map(card => {
                return <RecipeCard title={card.title} description={card.description} />
            })}
            {console.log('recipe after setState:', recipe)}
            
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