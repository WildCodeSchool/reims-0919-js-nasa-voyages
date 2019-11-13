import React from "react";
import "./GameFormPlanet.css";

const GameFormPlanet = props => {
  return (
    <div className="Planet">
      <form onSubmit={props.handleSubmit}>
        <div className="BoxMenu">
          <label className="Menu">
            <p className="Depart">Départ :</p>
            <select onChange={props.handleDepartChange}>
              <option value="" disabled selected>
                Choisissez une planète
              </option>
              {props.planetOptions.map(option => {
                return (
                  <option key={`depart_${option}`} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        <label className="SMenuLabel">
          <p className="Arrival">Arrivée : </p>
          <div className="SMenu">
            <select onChange={props.handleArrivalChange}>
              <option value="" disabled selected>
                Choisissez une planète
              </option>
              {props.planetOptions.map(option => {
                return (
                  <option key={`arrival_${option}`} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
        </label>
      </form>
    </div>
  );
};

export default GameFormPlanet;
