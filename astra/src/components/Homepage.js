import React from 'react';
import './Homepage.css';

function Homepage () {
    return (
        <div id="volet_clos">
            <div id='volet'>
                <hi>Page d'accueil, motherfucker !</hi>
                <a href="#volet" className='ouvrir'>Ouvrir !</a>
                <a href="#volet_clos" className="fermer">fermer !</a>
            </div>
        </div>    
    )
}

export default Homepage;