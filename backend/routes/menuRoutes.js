const express = require('express');
const { getMenuByRestaurant } = require('../controllers/menuController');
const router = express.Router();

// Fetch menu by restaurant ID
router.get('/:restaurantId', getMenuByRestaurant);

module.exports = router;
