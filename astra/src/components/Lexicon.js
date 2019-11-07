import React from "react";
import "./Lexicon.css";

const Lexicon = props => (
  <div className="lexiconPage">
    <div className="lexicon">
      <h3 className="name">{props.name}</h3>
      <div className="lexiconContent">
        <p>{props.description}</p>
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  </div>
);

export default Lexicon;
