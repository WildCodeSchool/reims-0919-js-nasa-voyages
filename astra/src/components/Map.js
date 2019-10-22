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
			<div className='mercury'><img src={"https://zupimages.net/up/19/43/59ta.png"} alt='Sun'/></div>
			<div className='venus'><img src={"https://zupimages.net/up/19/43/j3cb.png"} alt='Sun'/></div>
			<div className='earth'><img src={"https://zupimages.net/up/19/43/3sov.png"} alt='Sun'/>
				<div className='orbitMoon'></div>
				<div className='moon'><img src={"https://zupimages.net/up/19/43/7jk4.png"} alt='Sun'/></div>
			</div>
			<div className='mars'><img src={"https://zupimages.net/up/19/43/vh19.png"} alt='Sun'/></div>
			<div className='jupiter'><img src={"https://zupimages.net/up/19/43/opag.png"} alt='Sun'/></div>
			<div className='saturn'><img src={"https://zupimages.net/up/19/43/vjxo.png"} alt='Sun'/></div>
			<div className='uranus'><img src={"https://zupimages.net/up/19/43/926v.png"} alt='Sun'/></div>
			<div className='neptune'><img src={"https://zupimages.net/up/19/43/stae.png"} alt='Sun'/></div>
		</div>	
	);	
}

export default PlanetMap