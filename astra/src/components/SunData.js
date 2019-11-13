import React from "react";
import Lexicon from "./Lexicon";
import Lexique from "./Lexique";
import './Lexique.css';
import sun from "../data/sun"

const SunData = () => (
  <div className='LexiqueSun'>
    <Lexique />
    {sun.map(item => (
      <Lexicon name={item.name} description={item.description} image={item.image} />
    ))}
  </div>
);

export default SunData;