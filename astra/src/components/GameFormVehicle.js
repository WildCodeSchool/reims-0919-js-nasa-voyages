import React from "react";

const GameFormVehicle = ({handleSubmit, handleVehicleChange, vehicleOptions}) => {
    return (
      <div className="Vehicle">
        <form onSubmit={handleSubmit}>
          <label className="LabelVehicle">
            <p>Choisis ton véhicule:</p>
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
