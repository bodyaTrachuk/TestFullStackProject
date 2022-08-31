import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import OrderCard from "./OrderCard";
import { useAppContext } from "../../../Context/AppContext";

import Fade from "react-reveal/Fade";

import "./BasketPage.css";

function BasketPage() {
  const goToTop = () => window.scrollTo(0, 0);
  useEffect(() => {
    goToTop();
  }, []);

  const { card, setCardState, setBacketPrice } = useAppContext();

  const { register, handleSubmit, reset } = useForm({ mode: "onChange" });

  const orderMass = [];

  const fetchData = () => {
    try {
      fetch("http://localhost:5000/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: orderMass }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    reset();
    // console.log(data);
    orderMass.push(data);
    orderMass.push(card);
    console.log(orderMass);
    alert("Подивитись замовлення в БД або на сервері ");
    setCardState([]);
    setBacketPrice(0);
    setGrandSum(0)
    fetchData();
  };

  let sum = card.reduce((sum, obj) => obj.finalPrice + sum, 0);

  const [promo, setPromo] = useState("promo228");
  const [grandSum, setGrandSum] = useState(sum);

  const promoCode = () => {
    alert("Промо активовано на 10% знижки");
    if (promo === "promo228") {
      setGrandSum(Math.round(sum - sum * 0.1));
    }
  };

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="Basket-container">
      <p className="Basket-title">Ваше замовлення</p>
      <div className="form">
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <Fade>
            <div className="form-content">
              <p className="delivery-title">Спосіб доставки</p>
              <div className="forms-radio">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="Доставка"
                    {...register("delivery")}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <p>Доставка</p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="Самовивіз"
                    {...register("delivery")}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <p>Самовивіз</p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="Заздалегідь"
                    {...register("delivery")}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <p>Заздалегідь</p>
                </label>
              </div>
              <div className="forms-inputs">
                <div className="input-container-test">
                  <input
                    type="text"
                    className="text-input"
                    placeholder="введіть ваше ім'я"
                    {...register("name", {
                      required: "Заповніть поле",
                      pattern: {
                        value: /^[a-zA-Zа-яА-Я іІїЇєЄ]/,
                        message: "Введіть ім'я",
                      },
                    })}
                  />
                  <label className="label">Ваше ім'я</label>
                </div>

                <div className="input-container-test ">
                  <input
                    type="text"
                    className="text-input"
                    placeholder="введіть ваш номер*"
                    {...register("phone", {
                      required: "Заповніть поле",
                      pattern: {
                        value: /\+380\d{2}\d{3}\d{2}\d{2}/,
                        message: "Введіть номер телефону",
                      },
                    })}
                  />
                  <label className="label">Телефон</label>
                </div>

                <select
                  {...register("city", {
                    required: "Виберіть місто",
                  })}
                >
                  <option value="Львів">Львів</option>
                  <option value="Брюховичі">Брюховичі</option>
                  <option value="Зумбра">Зумбра</option>
                  <option value="Зимня Вода">Зимня Вода</option>
                  <option value="Рудне">Рудне</option>
                  <option value="Рясне">Рясне</option>
                </select>

                <div className="form-home">
                  <div className="input-container-medium">
                    <input
                      type="text"
                      className="text-input"
                      placeholder="введіть вулицю*"
                      {...register("street", {
                        required: "Заповніть поле",
                        pattern: {
                          value: /^[a-zA-Zа-яА-Я іІїЇєЄ]/,
                          message: "Введіть вулицю",
                        },
                      })}
                    />
                    <label className="label">Вулиця</label>
                  </div>

                  <div className="input-container-medium">
                    <input
                      type="text"
                      className="text-input"
                      placeholder="введіть № будинку*"
                      {...register("houseNumber", {
                        required: "Заповніть поле",
                        pattern: {
                          value: /^[0-9a-zA-Zа-яА-Я іІїЇєЄ]/,
                          message: "введіть № будинку",
                        },
                      })}
                    />
                    <label className="label">№ будинку</label>
                  </div>
                </div>

                <div className="form-date">
                  <input type="date" name="date" {...register("data")} />
                  <select placeholder="Час" {...register("time")}>
                    <option value="">Час доставки</option>

                    <option value="10:00 - 10:15">10:00 - 10:15</option>
                    <option value="10:15 - 10:30">10:15 - 10:30</option>
                    <option value="10:30 - 10:45">10:30 - 10:45</option>
                    <option value="10:45 - 11:00">10:45 - 11:00</option>

                    <option value="11:00 - 11:15">11:00 - 11:15</option>
                    <option value="11:15 - 11:30">11:15 - 11:30</option>
                    <option value="11:30 - 11:45">11:30 - 11:45</option>
                    <option value="11:45 - 12:00">11:45 - 12:00</option>

                    <option value="12:00 - 12:15">12:00 - 12:15</option>
                    <option value="12:15 - 12:30">12:15 - 12:30</option>
                    <option value="12:30 - 12:45">12:30 - 12:45</option>
                    <option value="12:45 - 13:00">12:45 - 13:00</option>

                    <option value="13:00 - 13:15">13:00 - 13:15</option>
                    <option value="13:15 - 13:30">13:15 - 13:30</option>
                    <option value="13:30 - 13:45">13:30 - 13:45</option>
                    <option value="13:45 - 14:00">13:45 - 14:00</option>

                    <option value="15:00 - 15:15">15:00 - 15:15</option>
                    <option value="15:15 - 15:30">15:15 - 15:30</option>
                    <option value="15:30 - 15:45">15:30 - 15:45</option>
                    <option value="15:45 - 16:00">15:45 - 16:00</option>

                    <option value="16:00 - 16:15">16:00 - 16:15</option>
                    <option value="16:15 - 16:30">16:15 - 16:30</option>
                    <option value="16:30 - 16:45">16:30 - 16:45</option>
                    <option value="16:45 - 17:00">16:45 - 17:00</option>
                  </select>
                </div>

                {/* <select
                  {...register("samovyviz", {
                    required: "Виберіть адресу",
                  })}
                >
                  <option value="">Адреса самовивозу</option>
                  <option value="Львів">Боткіна, 36</option>
                  <option value="Брюховичі">Героїв УП, 73</option>
                  <option value="Зумбра">Січових Стрільців, 10</option>
                  <option value="Зимня Вода">Торф'яна, 10</option>
                  <option value="Рудне">Хуторіка, 59б</option>
                </select> */}

                <div className="input-container-textarea">
                  <textarea
                    placeholder="введіть коментар"
                    className="text-input"
                    {...register("commentForOrder")}
                  ></textarea>
                  <label className="label">Коментар до замовлення</label>
                </div>

                <div className="address">
                  <div className="input-container-small">
                    <input
                      type="text"
                      className="text-input"
                      placeholder="введіть під'їзд*"
                      {...register("entrance", {
                        required: "Заповніть поле",
                        pattern: {
                          value: /[0-9]/,
                          message: "Введіть № будинку",
                        },
                      })}
                    />
                    <label className="label">Під'їзд</label>
                  </div>
                  <div className="input-container-small">
                    <input
                      type="text"
                      placeholder="введіть поверх*"
                      className="text-input"
                      {...register("floor", {
                        required: "Заповніть поле",
                      })}
                    />
                    <label className="label">Поверх</label>
                  </div>
                  <div className="input-container-small">
                    <input
                      type="text"
                      className="text-input"
                      placeholder="введіть кв / офіс"
                      {...register("apartment", {
                        required: "Заповніть поле",
                      })}
                    />
                    <label className="label">Кв./ офіс</label>
                  </div>
                  <div className="input-container-small">
                    <input
                      type="text"
                      className="text-input"
                      placeholder="введіть домофон"
                      {...register("domofon", {
                        required: "Заповніть поле",
                      })}
                    />
                    <label className="label">Домофон</label>
                  </div>
                </div>

                <div className="input-adress-textarea">
                  <textarea
                    placeholder="введіть коментар"
                    className="text-input"
                    {...register("commentForAdress")}
                  ></textarea>
                  <label className="label">Коментар до адреси</label>
                </div>

                {/* <div className="input-container-test ">
                <input type="text" autoComplete="off" className="text-input" placeholder="enter your username" required/>
                <label className="label">UserName</label>
              </div> */}

                <div className="price-block hide-block">
                  <p>Разом: {grandSum} грн</p>
                  <input type="submit" value="Готово" />
                </div>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="Basket-items2">
              <div className="Basket-orders">
                <div className="Basket-orders-title">
                  <p>Товар</p>
                </div>
                <div className="orders-items">
                  <table>
                    {card.map((data, i) => (
                      <OrderCard
                        key={Math.random() * 1234}
                        img={data.img}
                        title={data.title}
                        amount={data.amount}
                        finalPrice={data.finalPrice}
                        titlePrice={data.titlePrice}
                        id={data.id}
                      />
                    ))}
                  </table>
                  <div className="napkin-check">
                    <input
                      type="checkbox"
                      value="так"
                      {...register("bezServetkok")}
                    />
                    <p>Без серветок</p>
                  </div>
                  <div className="final-final-pirce">
                    <p>Разом : {sum} грн</p>
                  </div>
                </div>
              </div>

              <div className="order">
                <p className="order-title">Оформити замовлення</p>
                <div className="order-items">
                  <p>Оберіть акцію</p>
                  <select {...register("Actions")}>
                    <option value="Оберіть акцію">Оберіть акцію</option>
                    <option value="Акція 2+1">Акція 2+1</option>
                    <option value="Самовивіз">Самовивіз</option>
                    <option value="Акція до дня народження">
                      Акція до дня народження
                    </option>
                  </select>
                </div>

                <div className="promo">
                  <p>Промо-код</p>
                  <div className="promo-input">
                    <input
                      type="text"
                      placeholder="Введіть промо-код"
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                    />
                    <button type="button" onClick={promoCode}>
                      Застосувати
                    </button>
                  </div>
                </div>
              </div>

              <div className="payment">
                <p>Спосіб оплати</p>
                <div className="payment-radio">
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="radio"
                      value="Готівка"
                      {...register("payment")}
                    />
                    <p>Готівка</p>
                  </label>
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="radio"
                      value="Онлайн"
                      {...register("payment")}
                    />
                    <p>Онлайн</p>
                  </label>
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="radio"
                      value="Карткою кур'єру"
                      {...register("payment")}
                    />
                    <p>Карткою кур'єру</p>
                  </label>
                </div>
              </div>
              <div className="info">
                <p className="info-title">Додаткова інформація</p>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    value="так"
                    {...register("zatefonuvatu")}
                  />
                  <p>Зателефонуйте мені для уточнення деталей</p>
                </label>
                <div className="price-block default-btn">
                  <p>Разом: {grandSum} грн</p>
                  <input type="submit" value="Готово" />
                </div>
              </div>
            </div>
          </Fade>
        </form>
      </div>
    </div>
  );
}

export default BasketPage;
