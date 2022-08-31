import React, { useState } from "react";
import { useAppContext } from "../../../Context/AppContext";

function SaladCard({
  url,
  ulr2,
  title,
  description,
  price,
  titlePrice,
  weight,
  weightTitle,
  id,
}) {
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
      titlePrice: titlePrice,
      amount: toggle,
    };
    // console.log(items);
    addCardItem(item);

    // setCost(cost + finalPrice);
    setBacketPrice(backetPrice + finalPrice);

    // localStorage.setItem('OrderItems',JSON.stringify(masyv.current))
    console.log(card);
  };

  return (
    <div className="cards-sald">
      <a href="$" className="upperCase">
        <img src={url} alt="img" className="def-img" />
        <img src={ulr2} alt="img" className="hover-image" />
      </a>

      <div className="adaptive-saladPage">
        <div className="middlecase">
          <p>{title}</p>
          <p>{description}</p>
        </div>
        <hr />
        <div className="lowerCase">
          <div className="PriceTitle">
            <p>{finalPrice}</p>
            <p>{titlePrice}</p>
          </div>
          <div className="inputs">
            <p className="toglle" onClick={minus}>
              -
            </p>
            <input
              type="text"
              value={toggle}
              onChange={(e) =>
                setToggle(+e.target.value < 0 ? 1 : +e.target.value)
              }
            />
            <p className="toglle" onClick={plus}>
              +
            </p>
          </div>
          <div className="delButtom">
            <button onClick={order}>Замовити</button>
          </div>
        </div>
      </div>

      <div className="absoluteCase">
        <p>{weight}</p>
        <p>{weightTitle}</p>
      </div>
    </div>
  );
}

export default SaladCard;
