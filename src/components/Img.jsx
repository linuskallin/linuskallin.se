import React from 'react';
import linus from '../images/linus.jpg'

function Img(props) {
  return (
    <div className="Img" style={props.position}>
      <img src={linus} alt={props.alt} style={props.width}/>
    </div>
  );
}

export default Img;