import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainFeed from "./components/features/MainFeed";


function App() {
  return (
    <Router>
      <div className="App">
    
       <Route exact path='/' component={MainFeed} />
  
      </div>
    </Router>
    
  );
}

export default App;
