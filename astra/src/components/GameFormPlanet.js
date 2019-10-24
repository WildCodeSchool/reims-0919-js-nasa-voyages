import React from 'react'

class GameFormPlanet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'earth'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite planet is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your planet:
          <select value={this.state.value} onChange={this.handleChange}>
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