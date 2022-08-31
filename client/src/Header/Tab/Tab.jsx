import React from "react";
import "./Tab.css";
import { NavLink } from "react-router-dom";

function Tab() {
  return (
    <div className="tab-container">
      <nav>
        <li className="hoverLi">
          <NavLink to="/action">
            <img
              src="https://la.ua/wp-content/uploads/2021/06/menu-icon-1.svg"
              alt=""
            />
            <p>Ації</p>
          </NavLink>
        </li>

        <li className="hoverLi">
          <NavLink to="/pizza">
            <img src="https://la.ua/wp-content/uploads/2021/06/menu-icon-2.svg" alt="" />
            <p>Піцци</p>
          </NavLink>
        </li>
        <li className="hoverLi">
          <NavLink to="/salads">
            <img src="https://la.ua/wp-content/uploads/2021/06/menu-icon-3.svg" alt="" />
            <p>Салати</p>
          </NavLink>
        </li>
        <li className="hoverLi">
          <NavLink to="/desserts">
            <img src="https://la.ua/wp-content/uploads/2022/04/deserty-nova.svg" alt="" />
            <p>Десерти</p>
          </NavLink>
        </li>
        <li className="hoverLi">
          <NavLink to="/drinks">
            <img src="https://la.ua/wp-content/uploads/2021/06/menu-icon-4.svg" alt="" />
            <p>Напої</p>
          </NavLink>
        </li>
        <li>
          <div>
            <img src="https://la.ua/wp-content/uploads/2021/06/menu-icon-5.svg" alt="" />
            <p>Інформація</p>
          </div>

          <ul className="hoverText">
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
        </li>
      </nav>
    </div>
  );
}

export default Tab;
