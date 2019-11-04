import React from "react";
import GameFormPlanet from "./GameFormPlanet";
import GameFormVehicle from "./GameFormVehicle";
import calculator from "./calculator.js";

const planetList = [
  {
    id: "terre",
    name: "La Terre",
    englishName: "Earth",
    distance: 149598262
  },
  {
    id: "soleil",
    name: "Le Soleil",
    englishName: "Sun",
    distance: 0
  },
  {
    id: "saturne",
    name: "Saturne",
    englishName: "Saturn",
    distance: 1426666422
  },
  {
    id: "mercure",
    name: "Mercure",
    englishName: "Mercury",
    distance: 57909227
  }
];

const vehicleList = [
  {
    vehicle: "Moto",
    speed: "120",
    image: ""
  },
  {
    vehicle: "Fusée",
    speed: "12000",
    image: ""
  },
  {
    vehicle: "Vélo",
    speed: "10",
    image: ""
  },
];

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planet_options: planetList.map(option => option.englishName ),
      vehicle_options: vehicleList.map(option => option.vehicle ),
      depart: "",
      arrival: "",
      vehicle: ""
    };
  }
  

  render() {
    return (
      <div className="Game">
        <GameFormPlanet
          depart={this.state.depart}
          arrival={this.state.arrival}
          planet_options={this.state.planet_options}
        />
        <GameFormVehicle vehicle_options={this.state.vehicle_options} />
      </div>
    );
  }
}
export default Game;
