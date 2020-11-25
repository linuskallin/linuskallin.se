import React from 'react';
import '../css/Dots.scss'

function Dots(props) {
  // const value = useContext(ObserverContext)

  // let dots = document.querySelectorAll(".Dots")
  // dots.forEach(element => {
  //   if(props.target.contains(element.className)){
  //     element.className.add("active")
  //   }
  // });
  // console.log(props.entry);
  return (
    <div className="Dots">
      <div className="dot linus"></div>
      <div className="dot programmering"></div>
      <div className="dot design"></div>
      <div className="dot musik"></div>
      <div className="dot kontakt"></div>
    </div>
  );
}

export default Dots;