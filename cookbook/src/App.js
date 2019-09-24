import React from 'react';
import './App.css';

import Navigation from './components/features/Navigation';
import SignUp from './components/features/SignUp';
import SignIn from './components/features/SignIn';
import UserInfo from "./components/features/UserInfo";



function App() {
  return (
    <div className="App">

    <Navigation />
    <SignUp />
    <UserInfo />
    <SignIn />

    </div>
  );
}

export default App;
