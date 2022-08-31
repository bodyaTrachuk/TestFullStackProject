import React, { useEffect, useState } from "react";
import Slide from "../../../Slider/Slide";
import "./Pizza.css";
// import { data } from "./data";
import HideText from "./HideText/HideText";
import Garmoshka from "./Garmoshka/Garmoshka";
import PizzaCard from "./PizzaCard";
import PizzaProps from "./pizzaProps";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function PizzaPage({ children }) {
  const goToTop = () => window.scrollTo(0, 0);
  useEffect(() => {
    goToTop();
  }, []);

  // ЗАПИТ НА API
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/pizza")
      .then((res) => res.json())
      .then((res) => setInfo(res))
      .catch((e) => console.log(e));
  }, []);
  //

  return (
    <div className="pizza-content">
      <Zoom>
        <Slide />
      </Zoom>

      <Fade bottom>
        <div className="pizza-title">
          <p>Піца</p>
        </div>
      </Fade>

      <div className="cards-block">
        {/* <div className="cards-container"> */}
          <Fade>
            <PizzaProps>
              {info.map((data) => (
                <PizzaCard
                  key={Math.random() * 1234}
                  id={data._id}
                  url={data.url}
                  url2={data.url2}
                  title={data.title}
                  description={data.description}
                  price={data.price}
                  titlePrice={data.titlePrice}
                  weight={data.weight}
                  weightTitle={data.weightTitle}
                  size={data.size}
                  sizeTitle={data.sizeTitle}
                />
              ))}
            </PizzaProps>
          </Fade>
        {/* </div> */}
      </div>

      <HideText />
      <Garmoshka />
    </div>
  );
}

export default PizzaPage;
