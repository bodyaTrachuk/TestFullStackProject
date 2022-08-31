import React, { useState } from "react";
import "./Garmoshka.css";
import { ReactComponent as Angle } from "../../../../img/angle-down-solid.svg";
import { data } from "./data";

function Garmoshka() {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <div className="garmoshka-container">
      <p className="GarmoshkaTitle">Найпоширеніші запитання</p>

      {data.map((data) => (
        <div key={Math.random() * 1234} className={active ? "Garmoshka open" : "Garmoshka"} onClick={toggle}>
          <div
            className="GarmoshkaItem"
          >
            <div className="textInfo">
              <p>{data.upperTitle}</p>
              <Angle />
            </div>
            <div className="hideText1">{data.lowerTitle}</div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Garmoshka;
