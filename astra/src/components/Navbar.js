import React from 'react';
import './Navbar.css';

function Navbar (){
  return (
    <div className='navbar'>
      <img className='burgerLogo'
      src='https://zupimages.net/up/19/43/e91b.png' alt="Burger menu's logo" />
    	<img className='astraLogo'
      src='https://zupimages.net/up/19/43/fxiz.png' alt="Astra's logo" 
			/>
			<a href='https://www.nasa.gov/'>
			<img className='nasaLogo'
			src='https://zupimages.net/up/19/43/1ihy.png' alt="Nasa's logo"
			/>
			</a>   
    </div>
  )
}

export default Navbar