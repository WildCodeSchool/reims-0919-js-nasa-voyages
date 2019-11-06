import React from 'react'
import './App.css'
import PlanetData from './components/PlanetData'
import DwarfPlanetData from './components/DwarfPlanetData'
import SatelliteData from './components/SatelliteData'

function App() {
  return (
    <div className = "App">
      <div>
        <PlanetData />
        <DwarfPlanetData />
        <SatelliteData />
      </div>
    </div>
  );
}

export default App;
