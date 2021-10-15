import React from "react";
import "../../style-modules/style.css";

function Changer() {

  return(
    <span className="changer">
        <button className="changer__button">&lt;&lt;</button>
        <button className="changer__button">1</button>
        <button className="changer__button">2</button>
        <button className="changer__button">3</button>
        <button className="changer__button">4</button>
        <button className="changer__button">5</button>
        <button className="changer__button">&gt;&gt;</button>
      </span> 
  )
}
;

export default Changer;
