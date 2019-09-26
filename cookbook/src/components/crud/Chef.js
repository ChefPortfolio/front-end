import React from 'react';
import styled from "styled-components";
import ChatIcon from "../logos/ChatIcon";
import BellIcon from "../logos/BellIcon";

// import modal
import PostModal from './PostModal';

const StyledAvatar= styled.div`
`;

const StyledName= styled.h1`
`;

const StyledInfo= styled.p`
`;

const StyledModal= styled.div`
`;


const Chef = props => {
    return (
        <>
            <div className="post-card">
                {console.log('Checking props', props)}
                <BellIcon />
                <ChatIcon />
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