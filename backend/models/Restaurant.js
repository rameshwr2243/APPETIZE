const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: String,
  city: String,
  rating: Number,
  price: Number,
  deliveryTime: String,
  offer: String,
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
