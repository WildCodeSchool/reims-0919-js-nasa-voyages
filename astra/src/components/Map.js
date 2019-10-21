import React from "react";
import './Map.css';

function PlanetMap() {
	return (
		<div className='galaxy'>
			<div className='sun'><img src={"https://zupimages.net/up/19/43/e1mh.png"} alt='Sun'/></div>
			<div className='orbitMercury'></div>
			<div className='orbitVenus'></div>
			<div className='orbitEarth'></div>
			<div className='orbitMars'></div>
			<div className='orbitJupiter'></div>
			<div className='orbitSaturn'></div>
			<div className='orbitUranus'></div>
			<div className='orbitNeptune'></div>
			<div className='mercury'></div>
			<div className='venus'></div>
			<div className='earth'>
				<div className='orbitMoon'></div>
				<div className='moon'></div>
			</div>
			<div className='mars'></div>
			<div className='jupiter'></div>
			<div className='saturn'></div>
			<div className='uranus'></div>
			<div className='neptune'></div>
		</div>	
	);	
}

export default PlanetMap