const Pizza = require("../models/pizzaModule");
const Action = require("../models/actionModule");
const Salad = require("../models/saladModule");
const Desert = require("../models/desertModule");
const Drink = require("../models/drinkModule");
const Order = require("../models/orderModule");

const getAction = (req, res) => {
  Action.find()
    .then((action) => res.json(action))
    .catch((e) => console.log(e));
};
const getPizza = (req, res) => {
  Pizza.find()
    .then((pizza) => res.json(pizza))
    .catch((e) => console.log(e));
};
const getSalad = (req, res) => {
  Salad.find()
    .then((action) => res.json(action))
    .catch((e) => console.log(e));
};
const getDesert = (req, res) => {
  Desert.find()
    .then((action) => res.json(action))
    .catch((e) => console.log(e));
};
const getDrink = (req, res) => {
  Drink.find()
    .then((action) => res.json(action))
    .catch((e) => console.log(e));
};

const getOrders = (req, res) => {
  Order.find()
    .then((action) => res.json(action))
    .catch((e) => console.log(e));
};

const Orders = (req, res) => {
  const { data } = req.body;
  const post = new Order({ data });
  post
    .save()
    .then((result) => res.send(result))
    .catch((e) => console.log(e));
};

module.exports = {
  getAction,
  getPizza,
  getSalad,
  getDesert,
  getDrink,
  getOrders,
  Orders,
};
