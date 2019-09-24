import React from 'react';

const Chef = props => {
    return (
        <>
            <div className="post-card">
                <h2>{props.chef.first_name}</h2>
                <h2>{props.chef.last_name}</h2>
                <p>{props.chef.location}</p>
                <p>{props.chef.contact}</p>
                <p>{props.chef.username}</p>
                
            </div>
        </>
    )
}

export default Chef;