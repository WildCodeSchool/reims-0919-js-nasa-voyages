import React from 'react'
import './GameFormPlanet.css'

class GameFormPlanet extends React.Component {
  render() {
    return (
      <div className='Planet'>
      <form onSubmit={this.props.handleSubmit}>
        <div className='BoxMenu'>
          <label className='Menu'>
            Your depart :  

              <select defaultValue={this.props.planet_options[0]} onChange={this.props.handleDepartChange}>
                {this.props.planet_options.map(option => {
                  return (
                  <option key={`depart_${option}`} value={option}>{option}</option>
                )})}
              </select>
          </label>
        </div>

          <label className='SMenuLabel'>
            Your arrival : 
            <div className='SMenu'>
              <select  defaultValue={this.props.planet_options[0]} onChange={this.props.handleArrivalChange}>
                {this.props.planet_options.map(option => {
                  return (
                  <option key ={`arrival_${option}`} value={option}>{option}</option>
                )})}
              </select>
            </div>
          </label>
      </form>
      </div>
    );
  }
}
export default GameFormPlanet