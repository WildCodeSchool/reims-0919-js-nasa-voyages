import React from 'react';
import Lexicon from './Lexicon'

const Planets = [
  {
    name: "Mercure",
    description: "",
    image: ""
  },
  {
    name: "Vénus",
    description: "",
    image: ""
  },
  {
    name: "Terre",
    description: "lorem",
    image: ""
  },
  {
    name: "Mars",
    description: "",
    image: ""
  },
  {
    name: "",
    description: "",
    image: ""
  },
];

const PlanetData = () => (
  <div>
    {Planets.map(item => (
      <Lexicon name={item.name} description={item.description} />
    ))}
  </div>
)

export default PlanetData;