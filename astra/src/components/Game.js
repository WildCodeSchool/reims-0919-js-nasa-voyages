import React from "react";
import GameFormPlanet from "./GameFormPlanet";
import GameFormVehicle from "./GameFormVehicle";
import UtilisatorVehicleForm from "./UtilisatorVehicleForm";
import vehicleList from "../data/vehicleList"
import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planetList: [],
      planetOptions: [],
      vehicleOptions: vehicleList.map(option => option.vehicle),
      depart: "",
      departPosition: "",
      arrival: "",
      arrivalPosition: "",
      distance: "",
      vehicle: "",
      speed: "",
      time: "",
      customSpeed: "",
      customVehicle: "",
      resultStatus: false
    };
    this.handleDepartChange = this.handleDepartChange.bind(this);
    this.handleArrivalChange = this.handleArrivalChange.bind(this);
    this.handleVehicleChange = this.handleVehicleChange.bind(this);
    this.handleCustomVehicleChange = this.handleCustomVehicleChange.bind(this);
    this.handleCustomSpeedChange = this.handleCustomSpeedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitNewVehicle = this.handleSubmitNewVehicle.bind(this);
    this.setAllPlanets = this.setAllPlanets.bind(this);
  }
  componentDidMount() {
    fetch("https://api.le-systeme-solaire.net/rest/bodies")
      .then(response => response.json())
      .then(data =>
        data.bodies.filter(options => {
          if (
            options.isPlanet ||
            options.englishName === "Moon" ||
            options.englishName === "Sun" ||
            options.englishName === "Deimos" ||
            options.englishName === "Io"
          ) {
            this.setState({
              planetList: [...this.state.planetList, options]
            });
          }
        })
      )
      .then(this.setAllPlanets);
  }

  setAllPlanets() {
    this.setState({
      planetOptions: this.state.planetList.map(option => option.name)
    });
  }

  handleDepartChange(event) {
    this.state.planetList.forEach(planet => {
      if (planet.name === event.target.value) {
        this.setState({
          departPosition: planet.semimajorAxis,
          depart: event.target.value
        });
      }
    });
  }
  handleArrivalChange(event) {
    this.state.planetList.forEach(planet => {
      if (planet.name === event.target.value) {
        this.setState({
          arrivalPosition: planet.semimajorAxis,
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

    const timeResult = Math.floor(
      Math.abs(this.state.departPosition - this.state.arrivalPosition) /
        this.state.speed
    );
    this.setState({
      time: timeResult,
      distance: Math.abs(
        this.state.departPosition - this.state.arrivalPosition
      ),
      resultStatus: true
    });
  }

  handleSubmitNewVehicle(event) {
    vehicleList[vehicleList.length] = {
      vehicle: this.state.customVehicle,
      speed: this.state.customSpeed
    };
    this.setState({
      vehicleOptions: vehicleList.map(option => option.vehicle)
    });
  }

  render() {
    return (
      <div className="Game">
        <GameFormPlanet
          depart={this.state.depart}
          arrival={this.state.arrival}
          planetOptions={this.state.planetOptions}
          handleDepartChange={this.handleDepartChange}
          handleArrivalChange={this.handleArrivalChange}
          handleSubmit={this.handleSubmit}
        />
        <GameFormVehicle
          vehicleOptions={this.state.vehicleOptions}
          handleVehicleChange={this.handleVehicleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="DivCalcul">
          <input
            className="Calcul"
            type="submit"
            value="Calculer"
            onClick={this.handleSubmit}
          />
        </div>
        <div className="Create">
          <p className="OrCreate">Or create your vehicle</p>
        </div>
        <UtilisatorVehicleForm
          handleCustomVehicleChange={this.handleCustomVehicleChange}
          handleCustomSpeedChange={this.handleCustomSpeedChange}
        />
        <input
          type="submit"
          value="Ajouter"
          onClick={this.handleSubmitNewVehicle}
        />
        <br />

        <p className={this.state.resultStatus ? "Result" : "Hidden"}>
          The distance between {this.state.depart} and {this.state.arrival} is{" "}
          {this.state.distance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          km
          <br />
          With a {this.state.vehicle}, it takes{" "}
          {this.state.time.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          hours to make the trip, or:
          <br />
          <ul>
            <li>
              {Math.floor(this.state.time / 24)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
              days.
            </li>
            <li>
              {Math.floor(this.state.time / 24 / 365)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
              years
            </li>
          </ul>
        </p>
      </div>
    );
  }
}
export default Game;
