const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const actionSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  buttonTitile: {
    type: String,
    required: true,
  }
});

const Action = mongoose.model("Action", actionSchema);

module.exports = Action;
