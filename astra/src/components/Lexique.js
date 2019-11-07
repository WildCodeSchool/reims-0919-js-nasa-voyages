import React from 'react';
import DwarfPlanetData from './DwarfPlanetData.js';
import PlanetData from './PlanetData.js';
import SatelliteData from './SatelliteData.js';
import SunData from './SunData.js';
import './Lexique.css';

function Lexique() {
  return (
    <div className = "Lexique">
        <SunData />
        <PlanetData />
        <DwarfPlanetData />
        <SatelliteData />
      </div>
  );
}

export default Lexique;