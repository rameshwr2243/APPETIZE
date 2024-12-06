const MenuItem = require('../models/MenuItem');

// Fetch menu items for a specific restaurant
exports.getMenuByRestaurant = async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const menuItems = await MenuItem.find({ restaurantId });
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching menu items', error: err.message });
  }
};
