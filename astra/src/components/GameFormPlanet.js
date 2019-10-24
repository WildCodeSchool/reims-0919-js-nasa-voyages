import React from 'react'

class GameFormPlanet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'moon'};

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
          Enter your start planet:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="sun">Sun</option>
            <option value="moon">Moon</option>
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