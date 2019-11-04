import React from 'react';



const Lexicon = props => (
  <div className='Contact'>
    <div>
      <h3 className='name'>{props.name}</h3>
        <p>{props.description}</p>
    </div>
  </div>
);

export default Lexicon;