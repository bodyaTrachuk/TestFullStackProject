import React, { useState } from "react";
import { useAppContext } from "../../../Context/AppContext";

function DessertCard({
  url,
  url2,
  title,
  description,
  tableTitle,
  tableItem1,
  titleItem1,
  tableItem2,
  titleItem2,
  tableItem3,
  titleItem3,
  tableItem4,
  titleItem4,
  price,
  titlePrice,
  btnText,
  absoluteTitle,
  absoluteDesc,
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

    setBacketPrice(backetPrice + finalPrice);

    // localStorage.setItem("OrderItems", JSON.stringify(masyv.current));
    console.log(card);
  };

  return (
    <div className="card-dessert">
      <div className="images-dessert">
        <img src={url} alt="" />
        <img src={url2} alt="" className="hover-img" />
      </div>

      <div className="adaptive-dessertCard">
        <div className="middle-content">
          <p>{title}</p>
          <p>{description}</p>
        </div>
        <div className="table">
          <p>{tableTitle}</p>
          {/* <table>
            <tbody>
              <tr>
                <td>
                  <p>{tableItem1}</p>
                  <p>{titleItem1}</p>
                </td>
                <td>
                  <p>{tableItem2}</p>
                  <p>{titleItem2}</p>
                </td>
                <td>
                  <p>{tableItem3}</p>
                  <p>{titleItem3}</p>
                </td>
                <td>
                  <p>{tableItem4}</p>
                  <p>{titleItem4}</p>
                </td>
              </tr>
            </tbody>
          </table> */}

          <div className="table-content">
            <div className="table-items">
              <p>{tableItem1}</p>
              <p>{titleItem1}</p>
            </div>
            <div className="table-items">
              <p>{tableItem2}</p>
              <p>{titleItem2}</p>
            </div>
            <div className="table-items">
              <p>{tableItem3}</p>
              <p>{titleItem3}</p>
            </div>
            <div className="table-items">
              <p>{tableItem4}</p>
              <p>{titleItem4}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="lower-content">
          <div className="price-container">
            <p>{finalPrice}</p>
            <p>{titlePrice}</p>
          </div>
          <div className="input-container">
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
          <div className="button-container">
            <button onClick={order}>{btnText}</button>
          </div>
        </div>
      </div>
      <div className="absolute-container">
        <p>{absoluteTitle}</p>
        <p>{absoluteDesc}</p>
      </div>
    </div>
  );
}

export default DessertCard;
