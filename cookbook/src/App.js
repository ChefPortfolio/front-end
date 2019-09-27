import React, { useState, useEffect, createContext } from 'react';
import { axiosWithAuth } from './components/crud/utils/axiosWithAuth';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Component Imports
import MainFeed from "./components/features/MainFeed";
import SignIn from "./components/features/SignIn";
import SignUp from "./components/features/SignUp";
import UserInfo from './components/features/UserInfo'
import ChefPortfolio from './components/crud/ChefPortfolio';
// import PrivateRoute from './components/crud/PrivateRoute';
import AddRecipe from './components/crud/AddRecipe';
import EditRecipe from './components/crud/EditRecipe';

export const ChefContext = createContext();

const App = props => {

  const [chef, setChef] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    description: '',
    instructions: '',
    meal_type: '',
    chef_id: localStorage.getItem('chef_id'),
    pic_url: '',
    id: Math.floor((Math.random() * 500) + 150)
  });

  const [newRecipeEdit, setNewRecipeEdit] = useState({
    title: '',
    description: '',
    instructions: '',
    meal_type: '',
    chef_id: localStorage.getItem('chef_id'),
    pic_url: '',
    id: localStorage.getItem('Recipe to edit')
  });


  useEffect(() => {
    // * Get request for getting posts data goes HERE */

    const id = localStorage.getItem('chef_id');

    //* When backend delivers an id, need to get id to localStorage instead of hard code */
    axiosWithAuth()
      .get(`https://chefbook-stacy.herokuapp.com/api/chefs/${id}/recipes`)
      .then(res => {
        console.log('GET request for a recipe for a chef', res);
        setChef(res.data);
      })
      .catch(err => {
        console.log('Error in GET request for a recipe for a chef', err.response);
      });
  }, []);

  const handleSubmitAdd = e => {
      
      axios.post(`https://chefbook-stacy.herokuapp.com/api/recipes`, newRecipe)
        .then(res => {
            console.log('Recipe POST res', res);
            console.log('checking add props', props);
            localStorage.setItem('isSubmitting', true);
            setChef([...chef, newRecipe]);
            localStorage.removeItem('isSubmitting');
        })
        .catch(err => console.log('Error is Recipe POST res', err.response))
  }

  const handleChangesAdd = e => {
    setNewRecipe({...newRecipe, [e.target.name]: e.target.value});
  }
  console.log('New Recipe', newRecipeEdit)


  const handleChangesEdit = e => {
    setNewRecipeEdit({...newRecipeEdit, [e.target.name]: e.target.value});
  }

  const handleSubmitEdit = e => {
    
    e.preventDefault();

    const id = localStorage.getItem('Recipe to edit');

    axios.put(`https://chefbook-stacy.herokuapp.com/api/recipes/${id}`, newRecipeEdit)
      .then(res => {
          console.log('Recipe PUT res', res);
          console.log('check for history', props);
          console.log('Zzzzz');
          localStorage.setItem('isEditing', true);
          localStorage.removeItem('recipe to edit');
      })
      .catch(err => console.log('Error is Recipe PUT res', err.response))
  }


  return (
    
    <Router>
      <div className="App">

      <ChefContext.Provider value={{chef, newRecipe, handleChangesAdd, handleSubmitAdd, newRecipeEdit, handleChangesEdit, handleSubmitEdit}}>
        <Route exact path='/' component={MainFeed} />
        <Route path="/sign-in" render={props => <SignIn {...props}/>} />
        <Route path="/sign-up" render={props => <SignUp {...props}/>} /> 
        <Route path="/user-info" render={props => <UserInfo {...props}/>} /> 

        {/* this will be turned into a Private Route - Alexis */}
        <Route path='/chefportfolio' component={ChefPortfolio} />
        <Route path='/addrecipe' render={props => <AddRecipe {...props}/>}/>
        <Route path='/editrecipe'  render={props => <EditRecipe {...props}/>}/>

      </ChefContext.Provider>

      </div>
    </Router>
    
  );
}

export default App;
