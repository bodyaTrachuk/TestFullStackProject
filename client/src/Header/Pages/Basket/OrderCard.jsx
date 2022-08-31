import React from "react";
import { ReactComponent as CrossIcon } from "../../../img/СrossIcon.svg";
import { useAppContext } from "../../../Context/AppContext";


function OrderCard({ img, title, amount, finalPrice, titlePrice, id  }) {

  const {removeCardItem} = useAppContext();


  return (
    <tr key={Math.random() * 1234} className="orders-card">
      <td className="img-title">
        <img src={img} alt="" />
        <p>{title}</p>
      </td>
      <td className="amount">
        <span>-</span>
        <input type="text" value={amount} />
        <span>+</span>
      </td>
      <td className="orders-card-price">
        <p>{finalPrice}</p>
        <p>{titlePrice}</p>
      </td>
      <span className="hover-cross" onClick={() => removeCardItem(id,finalPrice)}>
        <CrossIcon />
      </span>
    </tr>
  );
}

export default OrderCard;
