import React, { useContext } from 'react';
import { ChefContext } from '../../App';
import { Redirect } from 'react-router-dom';

const EditRecipe = props => {
    const context = useContext(ChefContext);


    if (localStorage.getItem('isSubmitting')) {
        return <Redirect to='/chefportfolio' />
    } else { 
    return (
        <div>
            <form>
                <input
                    type="text"
                    name="title"
                    value={context.newRecipeEdit.title}
                    placeholder="Edit recipe"
                    onChange={context.handleChangesEdit}
                />
                
                <br/>
                
                <input
                    type="text"
                    name="description"
                    value={context.newRecipeEdit.description}
                    placeholder="Edit description"
                    onChange={context.handleChangesEdit}
                />
                <br/>
                <input
                     type="text"
                     name="instructions"
                     value={context.newRecipeEdit.instructions}
                     placeholder="Edit instructions"
                     onChange={context.handleChangesEdit}
                />
                <br/>
                <select name="meal_type" onChange={context.handleChangesEdit} value={context.newRecipeEdit.meal_type}>
                    <option value="">Select Category</option>
                    <option value='Breakfast'>Breakfast</option>
                    <option value='Lunch'>Lunch</option>
                    <option value='Dinner'>Dinner</option>
                </select>  

            </form>
            <button onClick={context.handleSubmitEdit}>Edit</button>
        </div>
    )
    }
}






export default EditRecipe;