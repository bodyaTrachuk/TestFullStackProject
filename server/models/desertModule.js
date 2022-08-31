const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const desertSchema = new Schema({
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
  },
  size: {
    type: String,
    required: true,
  },
  sizeTitle: {
    type: String,
    required: true,
  },
});

const Desert = mongoose.model("Desert", desertSchema);

module.exports = Desert;
