import React from 'react'

class GameFormVehicle extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Choose your vehicle:
          <select defaultValue={this.props.vehicle_options[0]} onChange={this.props.handleVehicleChange}>
            {this.props.vehicle_options.map(option => {
              return (
              <option key={`vehicule_${option}`} value={option}>{option}</option>
            )})}
          </select>
        </label>
      </form>
    );
  }
}
export default GameFormVehicle