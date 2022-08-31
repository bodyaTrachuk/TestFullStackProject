import React from "react";

import { NavLink } from "react-router-dom";
import "./Basket.css";
import { ReactComponent as ShopIcon } from "../../../img/basket.svg";
import { useAppContext } from "../../../Context/AppContext";

function Basket() {
  const { backetPrice } = useAppContext();

  return (
    <div className="basket-container">
      <NavLink to="/basket">
        <ShopIcon className="basket-item" />
        <p className="shop-text">
          <p className="shopPrice">{backetPrice}</p>
          <p>грн</p>
        </p>
      </NavLink>
    </div>
  );
}

export default Basket;
