import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainFeed from "./components/features/MainFeed";

import PostPage from './components/crud/PostPage';


function App() {
  return (
    <Router>
      <div className="App">
    
       <Route exact path='/' component={MainFeed} />
       <Route path='/postpage' component={PostPage} />
  
      </div>
    </Router>
    
  );
}

export default App;
