import React from 'react'
import './App.css'
import Home from './components/Home'
import Game from './components/Game'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className = "App">
      <Home />
      <Navbar />
      <div className = "Application">
        <Game />
      </div>
    </div>
  );
}

export default App;
