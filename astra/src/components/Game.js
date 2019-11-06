import React from 'react'
import GameFormPlanet from './GameFormPlanet'
import GameFormVehicle from './GameFormVehicle'
import calculator from './calculator.js'
import './Game.css'

const planetList = [{
  "id": "terre",
  "name": "La Terre",
  "englishName": "Earth",
  "distance": 149598262,
},
{
  "id": "soleil",
  "name": "Le Soleil",
  "englishName": "Sun",
  "distance": 0,
  },
{
  "id": "saturne",
  "name": "Saturne",
  "englishName": "Saturn",
  "distance": 1426666422,
},
{
  "id": "mercure",
  "name": "Mercure",
  "englishName": "Mercury",
  "distance": 57909227,
}]

//const letsTry () =>

  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        depart: '',
        arrival: '',
        vehicle: ''
      };
    }
    render () {
      return (
        <div className='Form'>
          <div className="Game">
            <GameFormPlanet/> 
          </div>
          <div className="Vehicle">
            <GameFormVehicle/>
          </div>
        </div>
      )
    }
  }
export default Game 