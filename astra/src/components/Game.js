import React from "react";
import GameFormPlanet from "./GameFormPlanet";
import GameFormVehicle from "./GameFormVehicle";
import UtilisatorVehicleForm from "./UtilisatorVehicleForm";

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
      arrival: "",
      vehicle: "",
      customSpeed: "",
      customVehicle: "",
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
    this.setState({ depart: event.target.value });
  }
  handleArrivalChange(event) {
    this.setState({ arrival: event.target.value });
  }
  handleVehicleChange(event) {
    this.setState({ vehicle: event.target.value });
  }
  handleCustomVehicleChange(event) {
    this.setState({ customVehicle: event.target.value });
  }

  handleCustomSpeedChange(event) {
    this.setState({ customSpeed: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Afficher dans le result: Distance / Temps de trajet / Vitesse / Véhicule
    const result = this.state.depart - this.state.arrival;

    if (result < 0) {
      console.log(-result);
      return -result;
    } else {
      console.log("yo" + result);
      return result;
    }
  }

  handleSubmitNewVehicle(event) {
    vehicleList[vehicleList.length] = {
      vehicle: this.state.customVehicle,
      speed: this.state.customSpeed
    };
    console.log(vehicleList);
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
        <input type="submit" value="Calculer" onClick={this.handleSubmit} />

        <UtilisatorVehicleForm
          handleCustomVehicleChange={this.handleCustomVehicleChange}
          handleCustomSpeedChange={this.handleCustomSpeedChange}
        />
        <input
          type="submit"
          value="Ajouter"
          onClick={this.handleSubmitNewVehicle}
        />
      </div>
    );
  }
}
export default Game;
