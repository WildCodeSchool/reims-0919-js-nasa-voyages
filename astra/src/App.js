import React from 'react'
import './App.css'
import PlanetData from './components/PlanetData'
import DwarfPlanetData from './components/DwarfPlanetData'
import SatelliteData from './components/SatelliteData'
import SunData from './components/SunData'
import Home from './components/Home'

function App() {
  return (
    <div className = "App">
      <div>
        <Home />
        <SunData />
        <PlanetData />
        <DwarfPlanetData />
        <SatelliteData />
      </div>
    </div>
  );
}

export default App;
