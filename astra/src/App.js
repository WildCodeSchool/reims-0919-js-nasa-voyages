import React from 'react'
import './App.css'
import Home from './components/Home'
import Game from './components/Game'
import Navbar from './components/Navbar'
import Lexique from './components/Lexique';

function App() {
  return (
    <div className = "App">
      <Home />
      <Navbar />
      <div className = "Application">
        <Game />
      </div>
      <Lexique/>
    </div>
  );
}

export default App;
