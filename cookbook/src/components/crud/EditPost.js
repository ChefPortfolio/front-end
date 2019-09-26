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
                    //PLEASE DO NOT DELETE STYLING                    
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <div>
                            <OrangeEmblem />
                            </div>
                            <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    name="title"
                                    variant="outlined"
                                    fullWidth
                                    id="title"
                                    label="Recipe Name"
                                    autoFocus
                                    InputProps={{
                                    classes: {
                                        outlined: classes.outlined,
                                        focused: classes.focused
                                    }
                                    }}
                                    value={recipeToEdit.title}
                                    required
                                    onChange={e => 
                                        setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                                    }
                                />
                                </Grid>
                                <FormControl variant="outlined" className={classes.formControl}>
                                <Select
                                    name="meal_type"
                                    label="Meal Type"
                                    id="meal_type"
                                    value={recipeToEdit.meal_type}
                                    onChange={e => 
                                        setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                                    }
                                    labelWidth={labelWidth}
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Breakfast">Breakfast</MenuItem>
                                    <MenuItem value="Lunch">Lunch</MenuItem>
                                    <MenuItem value="Dinner">Dinner</MenuItem>
                                </Select>
                                </FormControl>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    name="description"
                                    variant="outlined"
                                    fullWidth
                                    id="description"
                                    label="Short Description"
                                    value={recipeToEdit.description}
                                    required
                                    onChange={e => 
                                        setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                                    }
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    name="instructions"
                                    variant="outlined"
                                    fullWidth
                                    id="instructions"
                                    label="Recipe Prepare Instructions"
                                    value={recipeToEdit.instructions}
                                    required
                                    onChange={e => 
                                        setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                                    }
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    name="pic_url"
                                    variant="outlined"
                                    fullWidth
                                    id="pic_url"
                                    label="Photo"
                                    autoFocus
                                    InputProps={{
                                    classes: {
                                        outlined: classes.outlined,
                                        focused: classes.focused
                                    }
                                    }}
                                    value={recipeToEdit.pic_url}
                                    required
                                    onChange={e => 
                                        setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                                    }
                                />
                                </Grid>
                                </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onChange={handleChanges}
                                onClick={() => setEditing(false)}
                            >
                                Edit Recipe
                            </Button>
                            </form>
                        </div>
                        
                        </Container>

                    // <form onSubmit={saveEdit}>
                    //     <h1>Edit Recipe</h1>
                    //     <label>Title:
                    //         <input 
                    //             onChange={e => 
                    //                 setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                    //             }
                    //             value={recipeToEdit.title}
                    //         />
                    //     </label>
                    //     <label>Description:
                    //         <input 
                    //             onChange={e => 
                    //                 setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                    //             }
                    //             value={recipeToEdit.description}
                    //         />
                    //     </label>
                    //     <label>Instructions:
                    //         <input 
                    //             onChange={e => 
                    //                 setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                    //             }
                    //             value={recipeToEdit.instructions}
                    //         />
                    //     </label>
                    //     <label>Meal Type:
                    //         <input 
                    //             onChange={e => 
                    //                 setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                    //             }
                    //             value={recipeToEdit.meal_type}
                    //         />
                    //     </label>
                    //     <label>Avatar:
                    //         <input 
                    //             onChange={e => 
                    //                 setRecipeToEdit({...recipeToEdit, recipe: e.target.value})
                    //             }
                    //             value={recipeToEdit.pic_url}
                    //         />
                    //     </label>

                    //     <button type="submit">Save</button>
                    //     <button onClick={() => setEditing(false)}>Cancel</button>
                    // </form>
                )}
        </>
    )

}

export default EditRecipe;
