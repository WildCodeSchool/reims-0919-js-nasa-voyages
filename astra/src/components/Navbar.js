import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar (){
  return (
    <div className='navbar'>
    	<img className='astraLogo'
      src='https://zupimages.net/up/19/43/fxiz.png' alt="Astra's logo" 
			/> 
      <div>
        <ul>
          <li><Link to='/Game'>Calcul</Link></li>
          <li><Link to='/Lexique'>Lexique</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar