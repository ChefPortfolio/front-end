import React from 'react';

//* Please Do Not Delete this */
const Post = props => {
    return (
        <>
            <div className="post-card">
                <h2>{props.post.title}</h2>
                <p>{props.post.description}</p>
                <p>{props.post.instructions}</p>
                <p>{props.post.meal_type}</p>
            </div>
        </>
    )
}

export default Post;