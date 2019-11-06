import React from 'react'
import './App.css'
import PlanetData from './components/PlanetData'
import DwarfPlanetData from './components/DwarfPlanetData'
import SatelliteData from './components/SatelliteData'
import SunData from './components/SunData'

function App() {
  return (
    <div className = "App">
      <div>
        <PlanetData />
        <DwarfPlanetData />
        <SatelliteData />
        <SunData />
      </div>
    </div>
  );
}

export default App;
