import React from 'react';
import '../css/variables.scss'

function Text(props) {
  return (
    <div className="Text" style={props.textPosition}>
      <p>{props.text}</p>
    </div>
  );
}

export default Text;