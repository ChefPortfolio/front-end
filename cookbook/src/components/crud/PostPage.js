//* Alexis */
import React, { useState, useReducer, useEffect } from 'react';
import { reducer, initialState } from './reducers/PostReducer';
import { axiosWithAuth } from './utils/axiosWithAuth';
import Post from './Post';


const PostPage = () => {
    const [newPost, setNewPost] = useState({title: '', description: '', instructions: '', meal_type: ''});
    const [posts, setPosts] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // * Get request for getting posts data goes HERE */
        axiosWithAuth().get(`https://lambdacooks.herokuapp.com/api/recipes`)
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log('Error in GET POST api', err.response);
            })
    }, [])

    const handleChanges = e => {
        setNewPost({...newPost, [e.target.name]: e.target.value});
    };

    const addPost = e => {
        e.preventDefault();
        //* POST request for adding a post goes HERE */
        axiosWithAuth().post(`https://lambdacooks.herokuapp.com/api/recipes`, newPost)
            .then(res => {
                console.log('POST request for addPost', res);
                setNewPost(res.data);

                dispatch({ type: 'ADD_POST', payload: res.data})
            })
            .catch(err => {
                console.log('Error in POST request for addPost', err.response)
            });
        setNewPost('');

    }
    console.log('State', state);

    return (
        <>
            <h1>Welcome to your Post</h1>
            <form>
                <div className="post-form">
                    <label>Title: </label>
                    <input
                        className="post-form"
                        type="text"
                        name="title"
                        placeholder="Add a title"
                        value={posts.title} required
                        onChange={handleChanges}
                    />
                </div>

                <div className="post-form">
                    <label>Description: </label>
                    <input
                        className="post-form"
                        type="text"
                        name="description"
                        placeholder="Add a description"
                        value={posts.description} required
                        onChange={handleChanges}
                    />
                </div>

                <div className="post-form">
                    <label>Instructions: </label>
                    <input
                        className="post-form"
                        type="text"
                        name="instructions"
                        placeholder="Add instructions"
                        value={posts.instructions} required
                        onChange={handleChanges}
                    />
                </div>

                <div className="post-form">
                    <label>Meal Type: </label>
                    <select 
                        className= "post-group"
                        type= "text"
                        name= "meal_type"
                        onChange= {handleChanges}
                        value={posts.meal_type} required>
                            <option value="">Select Category</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                    </select>
                </div>

                <button onClick={addPost} className="add-post-btn">Add Post</button>
            </form>

            {posts.map(post => (
            <Post post={post} />
        ))}
        </>
    );
};

export default PostPage;