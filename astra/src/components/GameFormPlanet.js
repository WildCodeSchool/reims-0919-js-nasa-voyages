import React from "react";
//import "./GameFormPlanet.css";

const GameFormPlanet = ({handleSubmit, handleDepartChange, planetOptions,handleArrivalChange}) => {
  return (
    <div className="Planet">
      <form onSubmit={handleSubmit}>
        <div className="BoxMenu">
          <label className="Menu">
            <p className="Depart">Départ:</p>
            <select defaultValue = "" onChange={handleDepartChange}>
              <option value="" disabled>
                Choisissez une planète
              </option>
              {planetOptions.map(option => {
                return (
                  <option key={`depart_${option}`} value={option}>
                    {option.replace(/[0-9]/g, "").replace(/\(|\)/g, "")}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        <label className="SMenuLabel">
          <p className="Arrival">Arrivée: </p>
          <div className="SMenu">
            <select defaultValue = "" onChange={handleArrivalChange}>
              <option value="" disabled>
                Choisissez une planète
              </option>
              {planetOptions.map(option => {
                return (
                  <option key={`arrival_${option}`} value={option}>
                    {option.replace(/[0-9]/g, "").replace(/\(|\)/g, "")}
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
