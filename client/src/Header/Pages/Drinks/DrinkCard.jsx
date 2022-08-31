import React, { useState } from "react";
import { useAppContext } from "../../../Context/AppContext";

function DrinkCard({ url, title, price, TitlePrice, btnText, id }) {
  const [toggle, setToggle] = useState(1);

  const { card, addCardItem, backetPrice, setBacketPrice } = useAppContext();

  const plus = () => {
    setToggle(toggle + 1);
  };

  const minus = () => {
    toggle === 1 ? setToggle(1) : setToggle(toggle - 1);
  };

  const finalPrice = price * toggle;

  const order = () => {
    const item = {
      id: id,
      img: url,
      title: title,
      finalPrice: finalPrice,
      titlePrice: TitlePrice,
      amount: toggle,
    };
    // console.log(items);
    addCardItem(item);

    // setCost(cost + finalPrice);
    setBacketPrice(backetPrice + finalPrice);

    // localStorage.setItem("OrderItems", JSON.stringify(masyv.current));
    console.log(card);
  };

  return (
    <div className="card-drink">
      <div className="drink-img">
        <img src={url} alt="img" />
      </div>

      <div className="adaptive-dinkCard">
        <div className="card-text-drink">
          <p>{title}</p>
        </div>
        <hr />
        <div className="bottom-content">
          <div className="drink-pice">
            <p>{finalPrice}</p>
            <p>{TitlePrice}</p>
          </div>
          <div className="drink-inputs">
            <span onClick={minus}>-</span>
            <input
              type="text"
              value={toggle}
              onChange={(e) =>
                setToggle(+e.target.value < 0 ? 1 : +e.target.value)
              }
            />
            <span onClick={plus}>+</span>
          </div>
          <div className="drink-btn">
            <button onClick={order}>{btnText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrinkCard;
