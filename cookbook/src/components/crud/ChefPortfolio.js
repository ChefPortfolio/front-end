///* THIS IS WHERE CHEFS CAN CREATE THEIR PORTFOLIO */

import React, { useState, useEffect, useReducer } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';
import Chef from './Chef';
import Navigation from '../features/Navigation';
import RecipeCard from './RecipeCard';


const ChefPortfolio = () => {
    const [chef, setChef] = useState([]);
    const [newRecipe, setNewRecipe] = useState({title: '', description: '', instructions: '', meal_type: '', chef_id: '', pic_url: ''});
    // const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // * Get request for getting posts data goes HERE */
        const id = localStorage.getItem('user_id');
        axiosWithAuth().get(`https://lambdacooks.herokuapp.com/api/chefs/${id}/recipes`)
            .then(res => {
                console.log('GET request for chefs', res);
                setChef(res.data);
            })
            .catch(err => {
                console.log('Error in GET request for chefs', err.response);
            });
    }, []);
    console.log(chef);

    // const handleChanges = e => {
    //     setNewChef({...newChef, [e.target.name]: e.target.value});
    // };

    const addRecipe = e => {
        e.preventDefault();
        //* POST request for adding a recipe goes HERE */
        axiosWithAuth().post(`https://lambdacooks.herokuapp.com/api/recipes/`, newRecipe)
            .then(res => {
                console.log('POST request for addRecipe', res);
                setNewRecipe(res.data);

            })
            .catch(err => {
                console.log('Error in POST request for addRecipe', err.response)
            });
        setNewRecipe('');
    }


   return (
       <>
            <form>
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

            </form>
                    <Navigation />
                    <Chef props={chef}/>
                    {chef.recipes.map(recipe => {
                        return <RecipeCard props={chef.recipes} />
                    })}
        </>
    );
};

   

export default ChefPortfolio;