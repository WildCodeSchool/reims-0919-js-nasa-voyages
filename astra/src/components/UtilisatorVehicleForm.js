import React, {Component} from 'react';
import './UtilisatorVehicleForm.css'

class UtilisatorVehicleForm extends Component {
  render () {
    return (
      <div className='Utilisator'>
      <form onSubmit={this.props.handleSubmit}>
        <label className='VehicleName' htmlFor='vehicleName'>Nom du véhicule : </label>
        <input
          id='vehicleName'
          name='vehicleName'
          type='text'
          value={this.props.customVehicle}
          onChange={this.props.handleCustomVehicleChange}
        /> 
        <br/>
        <label className='VehicleSpeed' htmlFor='vehicleName'>Vitesse moyenne : </label>
        <input
          id='speedAverage'
          name='speedAverage'
          type='number'
          value={this.props.customSpeed}
          onChange={this.props.handleCustomSpeedChange}
        />
        <p>{this.props.userVehicle}</p>
      </form>
      </div>
    )
  }
}

export default UtilisatorVehicleForm