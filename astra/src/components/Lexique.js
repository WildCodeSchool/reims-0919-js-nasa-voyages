import React from "react";
//import './Lexique.css';
import { Link } from "react-router-dom";

function Lexique() {
  return (
    <div className="Lexique">
      <ul>
        <li><Link to='/Lexique'>Soleil</Link></li>
        <li><Link to='/Lexique/Planets'>Planetes</Link></li>
        <li><Link to='/Lexique/DwarfPlanets'>Planetes Naines</Link></li>
        <li><Link to='/Lexique/Satellites'>Satellites</Link></li>
      </ul>
    </div>
  );
}

export default Lexique;
