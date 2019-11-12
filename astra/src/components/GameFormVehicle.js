import React from 'react'
import './GameFormVehicle.css'

class GameFormVehicle extends React.Component {
  render() {
    return (
      <div className='Vehicle'>
      <form onSubmit={this.props.handleSubmit}>
        <label className='LabelVehicle'>
          Choose your vehicle:
          <select onChange={this.props.handleVehicleChange}>
          <option value = "" disabled selected>Choisissez un véhicule</option>
            {this.props.vehicleOptions.map(option => {
              return (
              <option key={`vehicule_${option}`} value={option}>{option}</option>
            )})}
          </select>
        </label>
      </form>
      </div>
    );
  }
}
export default GameFormVehicle