import React from 'react';

function UtilisatorVehicleForm () {
  return(
    <div>
      <div>
        <label for='NameOfVehcile'>Name of your vehicle</label>
        <input type='text' name='NameOfVehicle' id='NameOfVehicle'></input>
      </div>
      <div>
        <label for="speed">Speed average</label>
        <input type="number" name="speed" id="speedinput"></input>
      </div>
    </div>
    )
}

export default UtilisatorVehicleForm