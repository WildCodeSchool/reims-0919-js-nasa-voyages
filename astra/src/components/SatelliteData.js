import React from "react";
import Lexicon from "./Lexicon";
import Lexique from "./Lexique";
import './Lexique.css';
import satellite from "../data/satellite"

const SatelliteData = () => (
  <div className='Lexique'>
    <Lexique/>
    {satellite.map(item => (
      <Lexicon key= {item.name} name={item.name} description={item.description} image={item.image}/>
    ))}
  </div>
);

export default SatelliteData;