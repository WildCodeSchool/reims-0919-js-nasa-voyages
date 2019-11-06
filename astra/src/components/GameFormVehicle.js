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
    alert(`Your vehicle is: ${this.props.vehicle}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your vehicle:
          <select value={this.props.vehicle} onChange={this.handleVehicleChange}>
            <option value="train">Train</option>
            <option value="rocket">Rocket</option>
            <option value="moped">Moped</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default GameFormVehicle