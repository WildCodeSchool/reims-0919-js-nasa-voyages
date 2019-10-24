import React from 'react'

class GameFormVehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'train'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your vehicle is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your vehicle:
          <select value={this.state.value} onChange={this.handleChange}>
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