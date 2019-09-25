import React, { useState, useEffect, useReducer } from 'react';
import { reducer, initialState } from './reducers/ChefReducer';
import { axiosWithAuth } from './utils/axiosWithAuth';
import Chef from './Chef';


const ChefPortfolio = () => {
    const [newChef, setNewChef] = useState({id: '', first_name: '', last_name: '', location: '', contact: '', username: '', password: '', email_address: '', avatar_url: ''})
    const [chefs, setChefs] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // * Get request for getting posts data goes HERE */
        axiosWithAuth().get(`https://lambdacooks.herokuapp.com/api/chefs`)
            .then(res => {
                console.log('GET request for chefs', res);
                setChefs(res.data);
            })
            .catch(err => {
                console.log('Error in GET request for chefs', err.response);
            });
    }, []);

    const handleChanges = e => {
        setNewChef({...newChef, [e.target.name]: e.target.value});
    };

    const addChef = e => {
        e.preventDefault();
        //* POST request for adding a chef goes HERE */
        axiosWithAuth().post(`https://lambdacooks.herokuapp.com/api/recipes`, newChef)
            .then(res => {
                console.log('POST request for addChef', res);
                setNewChef(res.data);

                dispatch({ type: 'ADD_CHEF', payload: res.data})
            })
            .catch(err => {
                console.log('Error in POST request for addChef', err.response)
            });
        setNewChef('');
    }
    console.log('Chef State', state);


   return (
       <>
             <h1>List of Chefs</h1>
            <form>
                <div className="chef-form">
                    <label>First Name: </label>
                    <input
                        className="chef-form"
                        type="text"
                        name="first_name"
                        placeholder="Add first name"
                        value={chefs.first_name} 
                        required
                        onChange={handleChanges}
                    />
                </div>

                <div className="chef-form">
                    <label>Last Name: </label>
                    <input
                        className="chef-form"
                        type="text"
                        name="last_name"
                        placeholder="Add last name"
                        value={chefs.last_name} 
                        required
                        onChange={handleChanges}
                    />
                </div>

                <div className="chef-form">
                    <label>Location: </label>
                    <input
                        className="chef-form"
                        type="text"
                        name="location"
                        placeholder="Add location"
                        value={chefs.location} 
                        required
                        onChange={handleChanges}
                    />
                </div>

                <div className="chef-form">
                    <label>Contact: </label>
                    <input
                        className= "chef-group"
                        type= "text"
                        name= "contact"
                        value={chefs.contact} 
                        required
                        onChange={handleChanges}
                    />
                </div>

                <div className="chef-form">
                    <label>Username: </label>
                    <input
                        className= "chef-group"
                        type= "text"
                        name= "username"
                        value={chefs.username} 
                        required
                        onChange={handleChanges}
                    />
                </div>

                <div className="chef-form">
                    <label>Password: </label>
                    <input
                        className= "chef-group"
                        type= "text"
                        name= "password"
                        onChange= {handleChanges}
                        value={chefs.password} 
                        required
                        onChange={handleChanges}
                    />
                </div>

                <div className="chef-form">
                    <label>Email Address: </label>
                    <input
                        className= "chef-group"
                        type= "text"
                        name= "email_address"
                        onChange= {handleChanges}
                        value={chefs.email_address} 
                        required
                        onChange={handleChanges}
                    />
                </div>

                <div className="chef-form">
                    <label>Avatar Url: </label>
                    <input
                        className= "chef-group"
                        type= "text"
                        name= "avatar_url"
                        onChange= {handleChanges}
                        value={chefs.avatar_url} 
                        required
                        onChange={handleChanges}
                    />
                </div>

                <button onClick={addChef} className="add-post-btn">Add Chef</button>
            </form>

            {chefs.map(chef => (
            <Chef chef={chef} />
        ))}
        </>
    );
};

   

export default ChefPortfolio;