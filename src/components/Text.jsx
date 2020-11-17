import React from 'react';
import '../css/variables.scss'

function Text(props) {
  return (
    <div className="Text" style={props.position}>
      <p>{props.text}</p>
    </div>
  );
}

export default Text;