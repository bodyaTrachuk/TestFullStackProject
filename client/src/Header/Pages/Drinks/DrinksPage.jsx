import React, { useEffect, useState } from "react";
import "./DrinksPage.css";
// import { data } from "./data-drinks";
import DrinkHideText from "./DrinkHideText/DrinkHideText";
import DrinkCard from "./DrinkCard";
import DrinkProps from "./drinkProps";

import Fade from "react-reveal/Fade";

function DrinksPage() {
  const goToTop = () => window.scrollTo(0, 0);
  useEffect(() => {
    goToTop();
  }, []);

  // ЗАПИТ НА API
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/drink")
      .then((res) => res.json())
      .then((res) => setInfo(res))
      .catch((e) => console.log(e));
  }, []);
  //

  return (
    <div className="Drink-cotainer">
      <Fade bottom>
        <div className="DrinkTitle">
          <p>Напої</p>
        </div>
      </Fade>

      <div className="Drink-card">
        <div className="Drink-card-content">
          <Fade>
            <DrinkProps>
              {info.map((data, i) => (
                <DrinkCard
                  id={data._id}
                  url={data.url}
                  title={data.title}
                  price={data.price}
                  TitlePrice={data.TitlePrice}
                  btnText={data.btnText}
                  key={Math.random() * 1234}
                  i={i}
                />
              ))}
            </DrinkProps>
          </Fade>
        </div>
      </div>

      <DrinkHideText />
    </div>
  );
}

export default DrinksPage;
