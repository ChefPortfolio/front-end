//* Alexis */
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';

const initialRecipe = {
    title: '',
    description: '',
    instructions: '',
    meal_type: '',
    chef_id: '',
    pic_url: ''
};

const EditRecipe = ({recipes, updateRecipes}) => {
    console.log('Recipes', recipes);

    const [editing, setEditing] = useState(false);
    const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe);

    const editRecipe = recipe => {
        setEditing(true);
        setRecipeToEdit(recipe);
    };

    useEffect(() => {

    }, [recipes]);

    const saveEdit = e => {
        e.preventDefault();

        //This is where the PUT request to save your updated post

        //* Make sure that the id is set to recipe being edited */
        const id = state.id;
        axiosWithAuth().put(`https://chefbook-stacy.herokuapp.com/api/chef/recipes/${id}`, recipeToEdit)
            .then(res => {
                console.log('saveEdit api', res);
                // updateRecipes(recipes.map(recipe => {
                //     if (res.data.id === recipe.id) {
                //         return res.data
                //     } else {
                //         return recipe
                //     }
                // }));
            })
            .catch(err => {
                console.log('Error in saveEdit api', err.response);
            })
    };

    const deleteRecipe = recipe => {
        //This is where the DELETE request to delete your post
        axiosWithAuth().delete(`https://chefbook-stacy.herokuapp.com/api/chefbook/recipes/${recipes.id}`)
            .then(res => {
                updateRecipes(recipes.filter(rec => res.data !==rec.id))
            })
            .catch(err => {
                console.log('Error in DELETE', err.response)
            });
    };

    return (
        <>
            <h1>Recipes</h1>
                {recipes.map(recipe => (
                   <li onClick={() => editRecipe(recipe)}>
                       <div>
                            <div className='delete' onClick={() => deleteRecipe}>
                                X
                            </div>
                       </div>
                   </li>
                ))}
                {editing && (
                    <form onSubmit={saveEdit}>
                        <h1>Edit Recipe</h1>
                        <label>Title:
                            <input 
                                onChange={e => 
                                    setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                                }
                                value={recipeToEdit.title}
                            />
                        </label>
                        <label>Description:
                            <input 
                                onChange={e => 
                                    setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                                }
                                value={recipeToEdit.description}
                            />
                        </label>
                        <label>Instructions:
                            <input 
                                onChange={e => 
                                    setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                                }
                                value={recipeToEdit.instructions}
                            />
                        </label>
                        <label>Meal Type:
                            <input 
                                onChange={e => 
                                    setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                                }
                                value={recipeToEdit.meal_type}
                            />
                        </label>
                        <label>Avatar:
                            <input 
                                onChange={e => 
                                    setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                                }
                                value={recipeToEdit.pic_url}
                            />
                        </label>

                        <button type="submit">Save</button>
                        <button onClick={() => setEditing(false)}>Cancel</button>
                    </form>
                )}
        </>
    )

}

export default EditRecipe;
