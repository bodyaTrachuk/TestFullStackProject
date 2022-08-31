const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const saladSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  url2: {
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
  titlePrice: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  weightTitle: {
    type: String,
    required: true,
  }
});

const Salad = mongoose.model("Salad", saladSchema);

module.exports = Salad;