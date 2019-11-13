import React from "react";
import "./GameFormVehicle.css";

const GameFormVehicle = (props) => {
    return (
      <div className="Vehicle">
        <form onSubmit={props.handleSubmit}>
          <label className="LabelVehicle">
            Choose your vehicle:
            <select defaultValue = "" onChange={props.handleVehicleChange}>
              <option value="" disabled>
                Choisissez un véhicule
              </option>
              {props.vehicleOptions.map(option => {
                return (
                  <option key={`vehicule_${option}`} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </label>
        </form>
      </div>
    );
  }
export default GameFormVehicle;
