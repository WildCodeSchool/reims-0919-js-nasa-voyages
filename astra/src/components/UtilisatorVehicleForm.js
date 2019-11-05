import React, {Component} from 'react';

class UtilisatorVehicleForm extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label htmlFor='vehicleName'>Name your vehicle : </label>
        <input
          id='vehicleName'
          name='vehicleName'
          type='text'
          value={this.props.customVehicle}
          onChange={this.props.handleCustomVehicleChange}
        /> 
        <br/>
        <label htmlFor='vehicleName'>Set your speed average : </label>
        <input
          id='speedAverage'
          name='speedAverage'
          type='number'
          value={this.props.customSpeed}
          onChange={this.props.handleCustomSpeedChange}
        />
        <p>{this.props.userVehicle}</p>
      </form>
      
    )
  }
}

export default UtilisatorVehicleForm