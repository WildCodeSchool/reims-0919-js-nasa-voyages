import React from 'react'
import './App.css'
import Home from './components/Home'
import Game from './components/Game'
import UtilisatorVehicleForm from './components/UtilisatorVehicleForm'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className = "App">
      <Home />
      <Navbar />
      <div className = "application">
      <Game />
      <UtilisatorVehicleForm />
      </div>
    </div>
  );
}

export default App;
