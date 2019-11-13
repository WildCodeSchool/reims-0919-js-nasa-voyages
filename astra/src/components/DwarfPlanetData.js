import React from "react";
import Lexicon from "./Lexicon";
import Lexique from "./Lexique";
import './Lexique.css';
import dwarfPlanets from "../data/dwarfPlanets"
const DwarfPlanetData = () => (
  <div className='Lexique' >
   <Lexique/>
    {dwarfPlanets.map(item => (
      <Lexicon key= {item.name} name={item.name} description={item.description} image={item.image} />
    ))}
  </div>
);

export default DwarfPlanetData;