import React, { useEffect, useState } from "react";
import "./Actions.css";
// import { data } from "./actionData";
import ActionProps from "./actionProps";

import Fade from "react-reveal/Zoom";

function ActionPage() {
  const goToTop = () => window.scrollTo(0, 0);
  useEffect(() => {
    goToTop();
  }, []);

  // ЗАПИТ НА API
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/action")
      .then((res) => res.json())
      .then((res) => setInfo(res))
      .catch((e) => console.log(e));
  }, []);
  //

  return (
    <div className="action-content">
      <div className="action-section">
        <p className="action-title">Акції</p>
      </div>

      {/* <div className="action-card"> */}
        <Fade>
          <ActionProps>
            {info.map((items) => {
              return (
                <div className="card-action" key={Math.random() * 123}>
                  <a href="##">
                    <img src={items.url} alt="img" />
                  </a>
                  <button className="action-button">
                    {items.buttonTitile}
                  </button>
                </div>
              );
            })}
          </ActionProps>
        </Fade>
      {/* </div> */}
    </div>
  );
}

export default ActionPage;
