//* Alexis */
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';

const initialPost = {
    title: '',
    description: '',
    instructions: '',
    meal_type: ''
};

const EditPost = ({posts, updatePosts}) => {
    console.log('Posts', posts);

    const [editing, setEditing] = useState(false);
    const [postToEdit, setPostToEdit] = useState(initialPost);

    const editPost = post => {
        setEditing(true);
        setPostToEdit(post);
    };

    useEffect(() => {

    }, [posts]);

    const saveEdit = e => {
        e.preventDefault();

        //This is where the PUT request to save your updated post
        axiosWithAuth().put(`https://lambdacooks.herokuapp.com/api/recipes/${postToEdit.id}`, postToEdit)
            .then(res => {
                console.log('savevEdit api', res);
                updatePosts(posts.map(post => {
                    if (res.data.id === post.id) {
                        return res.data
                    } else {
                        return color
                    }
                }));
            })
            .catch(err => {
                console.log('Error in saveEdit api', err.response);
            })
    };

    const deletePost = post => {
        //This is where the DELETE request to delete your post
        axiosWithAuth().delete(`https://lambdacooks.herokuapp.com/api/recipes/:id`)
            .then(res => {
                updatePosts(posts.filter(pos => res.data !==pos.id))
            })
            .catch(err => {
                console.log('Error in DELETE', err.response)
            });
    };

    return (
        <>
        

        </>
    )

}

export default EditPost;
