import React from 'react'
import './App.css'
import PlanetData from './components/PlanetData'
import DwarfPlanetData from './components/DwarfPlanetData'
import SatelliteData from './components/SatelliteData'
import SunData from './components/SunData'
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
        <SunData />
        <PlanetData />
        <DwarfPlanetData />
        <SatelliteData />
      </div>
  );
}

export default App;
