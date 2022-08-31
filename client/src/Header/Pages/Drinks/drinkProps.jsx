import React from "react";
import "./DrinksPage.css";

function drinkProps({ children }) {
  return (
    <div className="Drink-card-content">
      {children}
    </div>
  );
}

export default drinkProps;
