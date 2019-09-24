import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import MainFeed from "./components/features/MainFeed";
import SignIn from "./components/features/SignIn";
import SignUp from "./components/features/SignUp";


function App() {
  return (
    <Router>
      <div className="App">
    
      <Route exact path='/' component={MainFeed} />
      <Route path="/sign-in" render={props => <SignIn {...props}/>} />
      <Route path="/sign-up" render={props => <SignUp {...props}/>} /> 
      </div>
    </Router>
    
  );
}

export default App;
