import React from 'react'

class GameFormPlanet extends React.Component {
  constructor(props) {
    super(props);

    this.handleDepartChange = this.handleDepartChange.bind(this);
    this.handleArrivalChange = this.handleArrivalChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDepartChange(event) {
    this.setState({depart: event.target.value});
  }
  handleArrivalChange(event) {
    this.setState({arrival: event.target.value});
  }

  handleSubmit(event) {
    alert(`Your depart is ${this.state.depart} and your arrival is ${this.state.arrival}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your planet:
          <select defaultValue={this.props.planet_options[0]} onChange={this.handleDepartChange}>
            {this.props.planet_options.map(option => {
              return (
              <option key={`depart_${option}`} value={option}>{option}</option>
            )})}
          </select>
        </label>
        <input type="submit" value="Submit" />
        <label>
          Choose your planet:
          <select defaultValue={this.props.planet_options[0]} onChange={this.handleArrivalChange}>
            {this.props.planet_options.map(option => {
              return (
              <option key ={`arrival_${option}`} value={option}>{option}</option>
            )})}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default GameFormPlanet