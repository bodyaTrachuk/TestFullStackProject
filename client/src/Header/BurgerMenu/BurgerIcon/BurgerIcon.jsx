import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerIcon.css";
// import BurgerMenu from "../BurgerMenu/BurgerMenu";

import { ReactComponent as Icon1 } from "../../../img/menu-icon-1.svg";
import { ReactComponent as Icon2 } from "../../../img/menu-icon-2.svg";
import { ReactComponent as Icon3 } from "../../../img/menu-icon-3.svg";
import { ReactComponent as Deserty } from "../../../img/deserty.svg";
import { ReactComponent as Icon4 } from "../../../img/menu-icon-4.svg";
import { ReactComponent as Icon5 } from "../../../img/menu-icon-5.svg";

function BurgerIcon() {
  const [active, setActive] = useState(false);
  const [hoverTExt, sethoverText] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const toggleMenu = () => {
    sethoverText(!hoverTExt);
  };

  return (
    <div className="burger-block">
      <div
        onClick={toggleActive}
        className={active ? "burgerIcon active" : "burgerIcon"}
      >
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>

      <div className={active ? "burger-menu" : "hideBlock"}>
        <nav>
          <li className="burger-list" onClick={toggleActive}>
            <Link to="/action">
              <Icon1 alt="icon" />
              <p>Ації</p>
            </Link>
          </li>
          <hr />
          <li className="burger-list" onClick={toggleActive}>
            <Link to="/pizza">
              <Icon2 alt="icon" />
              <p>Піцци</p>
            </Link>
          </li>
          <hr />
          <li className="burger-list" onClick={toggleActive}>
            <Link to="/salads">
              <Icon3 alt="icon" />
              <p>Салати</p>
            </Link>
          </li>
          <hr />
          <li className="burger-list" onClick={toggleActive}>
            <Link to="/desserts">
              <Deserty alt="icon" />
              <p>Десерти</p>
            </Link>
          </li>
          <hr />
          <li className="burger-list" onClick={toggleActive}>
            <Link to="/drinks">
              <Icon4 alt="icon" />
              <p>Напої</p>
            </Link>
          </li>
          <hr />
          <li className="burger-list" onClick={toggleMenu}>
            <div className="no-list">
              <Icon5 alt="icon" />
              <p>Інформація</p>
              <ul
                // className="hoverText"
                className={hoverTExt ? "hoverText1" : "no-display"}
              >
                <li>
                  <a href="##">Франшиза</a>
                </li>
                <li>
                  <a href="##">Доставка</a>
                </li>
                <li>
                  <a href="##">Оплата</a>
                </li>
                <li>
                  <a href="##">Про нас</a>
                </li>
                <li>
                  <a href="##">Новини</a>
                </li>
                <li>
                  <a href="##">Оферта</a>
                </li>
                <li>
                  <a href="##">Для партнерів</a>
                </li>
                <li>
                  <a href="##">Вкансії</a>
                </li>
                <li>
                  <a href="##">Контакти</a>
                </li>
                <li>
                  <a href="##">Donate</a>
                </li>
              </ul>
            </div>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default BurgerIcon;
