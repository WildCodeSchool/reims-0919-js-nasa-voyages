import React from "react";
import GameFormPlanet from "./GameFormPlanet";
import GameFormVehicle from "./GameFormVehicle";
import UtilisatorVehicleForm from "./UtilisatorVehicleForm";
import './Game.css'



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
    speed: "120"
  },
  {
    vehicle: "Fusée",
    speed: "12000"
  },
  {
    vehicle: "Vélo",
    speed: "10"
  }
];

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planet_options: planetList.map(option => option.englishName),
      vehicle_options: vehicleList.map(option => option.vehicle),
      depart: "",
      departPosition: "",
      arrival: "",
      arrivalPosition: "",
      distance: "",
      vehicle: "",
      speed: "",
      time: "",
      customSpeed: "",
      customVehicle: ""
    };
    this.handleDepartChange = this.handleDepartChange.bind(this);
    this.handleArrivalChange = this.handleArrivalChange.bind(this);
    this.handleVehicleChange = this.handleVehicleChange.bind(this);
    this.handleCustomVehicleChange = this.handleCustomVehicleChange.bind(this);
    this.handleCustomSpeedChange = this.handleCustomSpeedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitNewVehicle = this.handleSubmitNewVehicle.bind(this);
  }

  handleDepartChange(event) {
    planetList.forEach(planet => {
      if (planet.englishName === event.target.value) {
        this.setState({
          departPosition: planet.distance,
          depart: event.target.value
        });
      }
    });
  }
  handleArrivalChange(event) {
    planetList.forEach(planet => {
      if (planet.englishName === event.target.value) {
        this.setState({
          arrivalPosition: planet.distance,
          arrival: event.target.value
        });
      }
    });
  }

  handleVehicleChange(event) {
    vehicleList.forEach(vehicle => {
      if (vehicle.vehicle === event.target.value) {
        this.setState({ speed: vehicle.speed, vehicle: event.target.value });
      }
    });
  }
  handleCustomVehicleChange(event) {
    this.setState({ customVehicle: event.target.value });
  }

  handleCustomSpeedChange(event) {
    this.setState({ customSpeed: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const timeResult = Math.floor((this.state.departPosition - this.state.arrivalPosition) / this.state.speed);
    this.setState({ time: timeResult,
                    distance: Math.abs(this.state.departPosition - this.state.arrivalPosition) });
  }

  handleSubmitNewVehicle(event) {
    vehicleList[vehicleList.length] = {
      vehicle: this.state.customVehicle,
      speed: this.state.customSpeed
    };
    this.setState({
      vehicle_options: vehicleList.map(option => option.vehicle)
    });
  }

  render() {
    return (
      <div className="Game">
        <GameFormPlanet
          depart={this.state.depart}
          arrival={this.state.arrival}
          planet_options={this.state.planet_options}
          handleDepartChange={this.handleDepartChange}
          handleArrivalChange={this.handleArrivalChange}
          handleSubmit={this.handleSubmit}
        />
        <GameFormVehicle
          vehicle_options={this.state.vehicle_options}
          handleVehicleChange={this.handleVehicleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className='DivCalcul'>
          <input className='Calcul'type="submit" value="Calculer" onClick={this.handleSubmit} />
        </div>
        <div className='Create'>
          <p className='OrCreate'>Or create your vehicle</p>
        </div>
        <UtilisatorVehicleForm
          handleCustomVehicleChange={this.handleCustomVehicleChange}
          handleCustomSpeedChange={this.handleCustomSpeedChange}
        />
        <input className='Add'
          type="submit"
          value="Ajouter"
          onClick={this.handleSubmitNewVehicle}
        />
        <p className='Result'>
          The distance between {this.state.depart} and {this.state.arrival} is{" "}
          {this.state.distance} km
        </p>
        <p className='Result'>
          With a {this.state.vehicle}, it takes {this.state.time} hours to make the trip, or {Math.floor(this.state.time / 24)} days.
        </p>
      </div>
    );
  }
}
export default Game;
