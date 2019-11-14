import React from "react";
import "./GameFormVehicle.css";

const GameFormVehicle = ({handleSubmit, handleVehicleChange, vehicleOptions}) => {
    return (
      <div className="Vehicle">
        <form onSubmit={handleSubmit}>
          <label className="LabelVehicle">
            Choisis ton véhicule:
            <select defaultValue = "" onChange={handleVehicleChange}>
              <option value="" disabled>
                Choisissez un véhicule
              </option>
              {vehicleOptions.map(option => {
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
