import React from 'react'
import './GameFormPlanet.css'

class GameFormPlanet extends React.Component {
  constructor (props){
    super(props)
  }
  render() {
    return (
      <div className='Planet'>
        <form onSubmit={this.props.handleSubmit}>
          <div className='BoxMenu'>
            <label className='Menu'>
              <p className='Depart'>Départ :</p>  
                <select onChange={this.props.handleDepartChange}>
                  {this.props.planetOptions.map(option => {
                    return (
                    <option key={`depart_${option}`} value={option}>{option}</option>
                  )})}
                </select>
            </label>
          </div>

            <label className='SMenuLabel'>
              <p className='Arrival'>Arrivée : </p>
              <div className='SMenu'>
                <select onChange={this.props.handleArrivalChange}>
                  {this.props.planetOptions.map(option => {
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