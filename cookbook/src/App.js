import React from 'react';
import './App.css';


import MainFeed from "./components/features/MainFeed";
import Navigation from './components/features/Navigation';




function App() {
  return (
    <div className="App">
      <MainFeed />
      <Navigation />
    </div>
  );
}

export default App;
