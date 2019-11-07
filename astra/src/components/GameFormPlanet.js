import React from 'react'

class GameFormPlanet extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Choose your planet:
          <select defaultValue={this.props.planet_options[0]} onChange={this.props.handleDepartChange}>
            {this.props.planet_options.map(option => {
              return (
              <option key={`depart_${option}`} value={option}>{option}</option>
            )})}
          </select>
        </label>
        <label>
          Choose your planet:
          <select defaultValue={this.props.planet_options[0]} onChange={this.props.handleArrivalChange}>
            {this.props.planet_options.map(option => {
              return (
              <option key ={`arrival_${option}`} value={option}>{option}</option>
            )})}
          </select>
        </label>
      </form>
    );
  }
}
export default GameFormPlanet