import React from 'react'

class GameFormVehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {vehicle: 'train'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({vehicle: event.target.vehicle});
  }

  handleSubmit(event) {
    alert('Your vehicle is: ' + this.state.vehicle);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your vehicle:
          <select vehicle={this.state.vehicle} onChange={this.handleChange}>
            <option vehicle="train">Train</option>
            <option vehicle="rocket">Rocket</option>
            <option vehicle="moped">Moped</option>
          </select>
        </label>
        <input type="submit" vehicle="Submit" />
      </form>
    );
  }
}
export default GameFormVehicle