import React from "react";
import Lexicon from "./Lexicon";

const Satellite = [
  {
    name: "Lune",
    description:
      "",
    image: ""
  },
  {
    name: "Deimos",
    description:
      "",
    image: ""
  },
  {
    name: "Phobos",
    description:
      "",
    image: ""
  },
  {
    name: "Callisto",
    description:
      "",
    image: ""
  },
  {
    name: "Io",
    description:
      "",
    image: ""
  },
  {
    name: "Hypérion",
    description:
      "",
    image: ""
  },
  {
    name: "Titan",
    description:
      "",
    image: ""
  },
  {
    name: "",
    description:
      "",
    image: ""
  },
];

const SatelliteData = () => (
  <div>
    {Satellite.map(item => (
      <Lexicon name={item.name} description={item.description} />
    ))}
  </div>
);

export default SatelliteData;