const express = require("express");

const router = express.Router();

const {
  getAction,
  getPizza,
  getSalad,
  getDesert,
  getDrink,
  getOrders,
  Orders,
} = require("../controllers/controler");

router.get("/api/pizza", getPizza);

router.get("/api/action", getAction);

router.get("/api/salad", getSalad);

router.get("/api/desert", getDesert);

router.get("/api/drink", getDrink);

// Відправка на сервер

router.get("/api/order", getOrders);

router.post("/api/order", Orders);

module.exports = router