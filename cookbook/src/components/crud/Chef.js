import React from 'react';

// import modal
import PostModal from './postModal';

const Chef = props => {
    return (
        <>
            <div className="post-card">
                <h2>{props.chef.first_name}</h2>
                <h2>{props.chef.last_name}</h2>
                <p>{props.chef.location}</p>
                <p>{props.chef.contact}</p>
                <p>{props.chef.username}</p>
                
                {/* if(localStorage.getItem('token')) {
                    return <PostModal />
                } else {
                    return <button className="follow-btn">Follow</button>
                } */}

            </div>
        </>
    )
}

export default Chef;