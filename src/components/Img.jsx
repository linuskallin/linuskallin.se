import React from 'react';
import '../css/Img.scss'

function Img(props) {

  let image = `images/${props.src}`
  return (
    <div className="Img" style={props.position} onMouseOver={(e)=> e.target.parentNode.childNodes[1].classList.add('img-text-hover')} onMouseLeave={(e)=> e.target.parentNode.childNodes[1].classList.remove('img-text-hover')}>
      <img src={image} alt={props.alt} style={props.style}/>
      <p className="img-text">{props.alt}</p>
    </div>
  );
}

export default Img;