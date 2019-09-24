//* Alexis */
import React, { useState, useEffect } from 'react';

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
    };

    const deletePost = post => {
        //This is where the DELETE request to delete your post

    };

    return (
        <>
        

        </>
    )

}

export default EditPost;
