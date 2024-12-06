const Restaurant = require('../models/Restaurant');

// Fetch all restaurants in a specific city
exports.getRestaurantsByCity = async (req, res) => {
  const { city } = req.params;
  try {
    const restaurants = await Restaurant.find({ city });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching restaurants', error: err.message });
  }
};
