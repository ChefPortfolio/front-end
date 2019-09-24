import React from "react";
import {Route} from "react-router-dom";

import SignUp from './components/features/SignUp';
import SignIn from './components/features/SignIn';

export default function MainFeed(){
    return(
        <div className="MainFeedWrapper">
            <SignUp />
            <SignIn />
        </div>
    )
}
