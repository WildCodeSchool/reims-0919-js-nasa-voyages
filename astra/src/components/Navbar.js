import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar (){
  return (
    <div className='navbar'>
    	<div className='navbarList'>
        <ul>
          <li><Link to='/Voyage'>Voyage</Link></li>
          <li><Link to='/Lexique'>Lexique</Link></li>
        </ul>
      </div>
      <div className='logoAstra'>
        <img src='https://zupimages.net/up/19/45/b8tc.png' alt="Astra's logo" /> 
      </div>
    </div>
  )
}

export default Navbar