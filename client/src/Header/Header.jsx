import React from "react";
import Logo from "./Logo/Logo";
import Tab from "./Tab/Tab";
import Location from "./Location/Location";
import UserBlock from "./UserBlock/UserBlock";
import BurgerIcon from './BurgerMenu/BurgerIcon/BurgerIcon'

import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <Logo />
      <Tab />
      <div className="apaptive-UserBlock">
        <Location />
        <UserBlock />
        <BurgerIcon />
      </div>
      
    </div>
  );
}

export default Header;
