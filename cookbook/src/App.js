import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Component Imports
import MainFeed from "./components/features/MainFeed";
import SignIn from "./components/features/SignIn";
import SignUp from "./components/features/SignUp";
import UserInfo from './components/features/UserInfo'
import ChefPortfolio from './components/crud/ChefPortfolio';
// import PrivateRoute from './components/crud/PrivateRoute';


function App() {

  return (
    <Router>
      <div className="App">

      <Route exact path='/' component={MainFeed} />
      <Route path="/sign-in" render={props => <SignIn {...props}/>} />
      <Route path="/sign-up" render={props => <SignUp {...props}/>} /> 
      <Route path="/user-info" render={props => <UserInfo {...props}/>} /> 

      {/* this will be turned into a Private Route - Alexis */}
      <Route path='/chefportfolio' component={ChefPortfolio} />


      </div>
    </Router>
    
  );
}

export default App;
