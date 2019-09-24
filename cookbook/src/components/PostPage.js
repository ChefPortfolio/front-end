//* Alexis */
import React, { useState, useEffect } from 'react';

const PostPage = () => {
    const [post, setPost] = useState([]);

    const [newPost, setNewPost] = useState({title: '', description: '', instructions: '', meal_type: ''});

    const getPost = () => {
        //* Get request for getting posts data goes HERE */
    }

    const handleChanges = e => {
        setNewPost({...newPost, [e.target.name]: e.target.value});
    };

    const addPost = e => {
        e.preventDefault();
        //* POST request for adding a post goes HERE */
    }

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
                        value={post.title} required
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
                        value={post.description} required
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
                        value={post.instructions} required
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
                        value={post.meal_type} required>
                            <option value="">Select Category</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                    </select>
                </div>

                <button onClick={addPost} className="add-post-btn">Add Post</button>
            </form>
        </>
    );
};

export default PostPage;