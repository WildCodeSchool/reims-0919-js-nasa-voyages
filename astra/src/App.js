import React from 'react'
import './App.css'
import PlanetData from './components/PlanetData'
import DwarfPlanetData from './components/DwarfPlanetData'
import SatelliteData from './components/SatelliteData'
import SunData from './components/SunData'
import Home from './components/Home'
import Game from './components/Game'
import Navbar from './components/Navbar'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className = "App">
      <Switch>
        <Route exact path= "/" component={() => <Home />} />
        <div className = "application">
          <Navbar />
          <Route exact path= "/Game" component={() => <Game />} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
