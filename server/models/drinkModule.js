const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  TitlePrice: {
    type: String,
    required: true,
  },
  btnText: {
    type: String,
    required: true,
  },
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
