import React, { useContext } from 'react';
import { ChefContext } from '../../App';
import { Link, Redirect } from 'react-router-dom';




const AddRecipe = props => {
    const context = useContext(ChefContext);

   
     if (localStorage.getItem('isSubmitting')) {
        return <Redirect to='/chefportfolio'/>

     } else {

     

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="title"
                    value={context.newRecipe.title}
                    placeholder="Add a recipe"
                    onChange={context.handleChangesAdd}
                />
                
                <br/>
                
                <input
                    type="text"
                    name="description"
                    value={context.newRecipe.description}
                    placeholder="Add a description"
                    onChange={context.handleChangesAdd}
                />
                <br/>
                <input
                     type="text"
                     name="instructions"
                     value={context.newRecipe.instructions}
                     placeholder="Add instructions"
                     onChange={context.handleChangesAdd}
                />
                <br/>
                <select name="meal_type" onChange={context.handleChangesAdd} value={context.newRecipe.meal_type}>
                    <option value="">Select Category</option>
                    <option value='Breakfast'>Breakfast</option>
                    <option value='Lunch'>Lunch</option>
                    <option value='Dinner'>Dinner</option>
                </select>  
                
            </form>
            
            <Link to='/chefportfolio'><button onClick={context.handleSubmitAdd}>Add</button></Link>
            
        </div>
    )
    } 
} 




export default AddRecipe;