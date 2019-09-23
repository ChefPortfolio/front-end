import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UserInfo from "./components/UserInfo";


function App() {
  return (
    <div className="App">

    <SignUp />
    <UserInfo />
    <SignIn />
    </div>
  );
}

export default App;
