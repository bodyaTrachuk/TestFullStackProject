import React, { useState } from "react";

import { useAppContext } from "../../../Context/AppContext";

const CardItem = ({
  url,
  url2,
  title,
  description,
  price,
  titlePrice,
  weight,
  weightTitle,
  size,
  sizeTitle,
  id,
}) => {
  const { card, addCardItem, backetPrice, setBacketPrice } = useAppContext();

  const [toggle, setToggle] = useState(1);

  const plus = () => {
    setToggle(toggle + 1);
  };

  const minus = () => {
    toggle === 1 ? setToggle(1) : setToggle(toggle - 1);
  };

  ////////////////////
  ////////////////////

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

    setBacketPrice(backetPrice + finalPrice);

    console.log(card);
  };

  ////////////////////
  ////////////////////

  return (
    <div className="cards">
      <a href="##" className="realive">
        <img src={url} alt="img" />
        <img src={url2} alt="img" className="imageHover" />
      </a>

      <div className="adaptiveBlock">
        <div className="card-text">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>
        <hr />
        <div className="card-price ">
          <div className="card-price-title">
            <span className="price">{finalPrice}</span>
            <span className="titlePrice">{titlePrice}</span>
          </div>

          <div className="block-input">
            <span className="minus" onClick={minus}>
              -
            </span>
            <input
              type="text"
              value={toggle}
              onChange={(e) =>
                setToggle(+e.target.value < 0 ? 1 : +e.target.value)
              }
            />
            <span className="plus" onClick={plus}>
              +
            </span>
          </div>
          <button onClick={order}>Замовити</button>
        </div>
      </div>

      <div className="absolute-block">
        <div className="content-before">
          <span className="weight">{weight}</span>
          <span className="weightTitle">{weightTitle}</span>
        </div>
        <div className="content-after">
          <span className="size">{size}</span>
          <span className="sizeTitle">{sizeTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
