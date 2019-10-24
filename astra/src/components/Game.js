import React from 'react'
import GameFormPlanet from './GameFormPlanet'
import GameFormVehicle from './GameFormVehicle'


  function Game() {
    return (
      <div className="Game">
        <GameFormPlanet/> 

        <GameFormVehicle/>

      </div>
    );
  }
export default Game