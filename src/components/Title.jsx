import React from 'react';
import '../css/Title.scss';
  
const Title = (props) => {

  return (
    <div className={"Title " + props.class} style={props.titlePosition}>
      <h3>{props.title}</h3>
    </div>
  )
}

export default Title;