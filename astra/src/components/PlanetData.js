import React from "react";
import Lexicon from "./Lexicon";
import Lexique from "./Lexique";
import './Lexique.css';
import planets from "../data/planets"



const PlanetData = () => (
  <div className='Lexique'>
    <Lexique />
    {planets.map(item => (
      <Lexicon key= {item.name} name={item.name} description={item.description} image={item.image} />
    ))}
  </div>
);

export default PlanetData;
