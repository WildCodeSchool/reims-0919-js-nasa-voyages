import React from 'react'
import './App.css'
import Home from './components/Home'
import Game from './components/Game'
import UtilisatorVehicleForm from './components/UtilisatorVehicleForm';

function App() {
  return (
    <div className="App">
      <Home />
      <Game />
      <UtilisatorVehicleForm />
    </div>
  );
}

export default App;
