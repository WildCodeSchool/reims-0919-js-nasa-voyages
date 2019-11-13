import React from 'react';
import './Reception.css';
import { Link } from "react-router-dom";


function Reception (){
  return (
    <div className='GReception'>
      <div className='reception'>
        <p>Bienvenue sur Astra, ici tu peux apprendre en t'amusant dans notre partie "Jeu" offrant la possibilité de calculer le temps et la distance d'un astre à un autre avec un moyen de transport original et incongrue. Tu trouvera également un lexique détaillé sur chaque astre.</p>
      </div>
      <div className='GButton'>
        <button className="GameButton"><Link to="/Game" >
          Jeu
        </Link></button>

        <button className="LexiqueButton"><Link to="/Lexique" className="LinkLexique" >
          Lexique
        </Link></button>
      </div>
    </div>
  )
}

export default Reception