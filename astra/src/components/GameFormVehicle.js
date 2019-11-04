import React from 'react'
import UtilisatorVehicleForm from './UtilisatorVehicleForm';

class GameFormVehicle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVehicleChange = this.handleVehicleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleVehicleChange(event) {
    this.setState({vehicle: event.target.value});
  }

  handleSubmit(event) {
    alert(`Your vehicle is: ${this.state.vehicle}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your vehicle:
          <select defaultValue={this.props.vehicle_options[0]} onChange={this.handleVehicleChange}>
            {this.props.vehicle_options.map(option => {
              return (
              <option key={`vehicule_${option}`} value={option}>{option}</option>
            )})}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default GameFormVehicle