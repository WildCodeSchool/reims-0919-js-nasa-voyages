import React, {Component} from 'react';

class UtilisatorVehicleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userVehicle: '',
      speed: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ userVehicle: event.target.value });
  }

  handleSpeedChange(event) {
    this.setState({ speed: event.target.value });
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='vehicleName'>Vehicle : </label>
        <input
          id='vehicleName'
          name='vehicleName'
          type='text'
          value={this.state.userVehicle}
          onChange={this.handleChange}
        /> 
        <br/>
        <label htmlFor='vehicleName'>Speed Average : </label>
        <input
          id='speedAverage'
          name='speedAverage'
          type='number'
          value={this.state.speed}
          onChange={this.handleSpeedChange}
        />
        <p>{this.state.userVehicle}</p>
      </form>
      
    )
  }
}

export default UtilisatorVehicleForm