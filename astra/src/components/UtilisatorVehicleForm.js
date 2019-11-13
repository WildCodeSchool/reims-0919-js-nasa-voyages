import React, { Component } from "react";
import "./UtilisatorVehicleForm.css";

const UtilisatorVehicleForm = ({
  handleSubmit,
  customVehicle,
  customSpeed,
  handleCustomSpeedChange,
  handleCustomVehicleChange,
  userVehicle
}) => {
  return (
    <div className="Utilisator">
      <form onSubmit={handleSubmit}>
        <label className="VehicleName" htmlFor="vehicleName">
          Nom du véhicule :{" "}
        </label>
        <input
          id="vehicleName"
          name="vehicleName"
          type="text"
          value={customVehicle}
          onChange={handleCustomVehicleChange}
        />
        <br />
        <label className="VehicleSpeed" htmlFor="vehicleName">
          Vitesse moyenne :{" "}
        </label>
        <input
          id="speedAverage"
          name="speedAverage"
          type="number"
          value={customSpeed}
          onChange={handleCustomSpeedChange}
        />
        <p>{userVehicle}</p>
      </form>
    </div>
  );
};

export default UtilisatorVehicleForm;
