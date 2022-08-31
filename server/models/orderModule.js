const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    data: {
    type: Array,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;