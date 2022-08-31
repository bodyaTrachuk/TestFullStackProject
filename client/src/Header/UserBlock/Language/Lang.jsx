import React from "react";
import { ReactComponent as AngleDown } from "../../../img/angle-down-solid.svg";
import "./Lang.css";

function Lang() {
  return (
    <div className="lang-container">
      <div><span>Укр </span> <AngleDown /></div>
      <ul className="lang-hover-text">
        <li>Eng</li>
        <li>Rus</li>
      </ul>
    </div>
  );
}

export default Lang;
