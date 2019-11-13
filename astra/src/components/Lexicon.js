import React from "react";
import "./Lexicon.css";

const Lexicon = ({image, name, description}) => (
  <div className="lexiconPage">
    <div className="lexicon">
      <h3 className="name">{name}</h3>
      <div className="lexiconContent">
        <p>{description}</p>
        <figure>
          <img src={image} alt={name} />
        </figure>
      </div>
    </div>
  </div>
);

export default Lexicon;
