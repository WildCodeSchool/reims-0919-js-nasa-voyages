import React from 'react'

class GameFormPlanet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      depart: 'earth',
      arrival: 'saturn',
    };

    this.handleDepartChange = this.handleDepartChange.bind(this);
    this.handleArrivalChange = this.handleArrivalChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDepartChange(event) {
    console.log("hello", event.target.value)
    this.setState({depart: event.target.value});
  }
  handleArrivalChange(event) {
    this.setState({arrival: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.depart, this.state.arrival)
    alert(`Your depart is ${this.state.depart} and your arrival is ${this.state.arrival}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your planet:
          <select value={this.state.depart} onChange={this.handleDepartChange}>
            <option value="sun">Sun</option>
            <option value="earth">Earth</option>
            <option value="mercury">Mercury</option>
            <option value="saturn">Saturn</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        <label>
          Choose your planet:
          <select value={this.state.arrival} onChange={this.handleArrivalChange}>
            <option value="sun">Sun</option>
            <option value="earth">Earth</option>
            <option value="mercury">Mercury</option>
            <option value="saturn">Saturn</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default GameFormPlanet