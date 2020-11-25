import React, { useEffect } from 'react';
import '../css/Cursor.scss';

function Cursor() {

  const mouseCursor = document.querySelector(".Cursor")
  
  window.addEventListener("mousemove", cursor)

  function cursor(e){
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
  }
    

  const images = document.querySelectorAll('.Img')

  images.forEach(image => {
    image.addEventListener("mouseover", () => {
      mouseCursor.classList.add("mouse-scale");
    })
    image.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("mouse-scale");
    })
  });

  return (
    <div className="Cursor">
    </div>
  );
}

export default Cursor;