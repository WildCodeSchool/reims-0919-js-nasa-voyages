import React from 'react';



const Lexicon = props => (
  <div className='Contact'>
    <div>
      <h3 className='name'>{props.name}</h3>
        <p>{props.description}</p>
        <img src={props.image} alt={props.name} />
    </div>
  </div>
);

export default Lexicon;