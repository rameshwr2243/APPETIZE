const express = require('express');
const { getRestaurantsByCity } = require('../controllers/restaurantController');
const router = express.Router();

// Fetch restaurants by city
router.get('/:city', getRestaurantsByCity);

module.exports = router;
