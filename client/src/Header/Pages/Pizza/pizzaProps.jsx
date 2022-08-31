import React from "react";
import "./Pizza.css";

function PizzaProps({ children }) {
  return (
    <div
      className="cards-container"
    >
      {children}
    </div>
  );
}

export default PizzaProps;
