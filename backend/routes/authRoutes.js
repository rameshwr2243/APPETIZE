const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', registerUser); // User registration
router.post('/login', loginUser);       // User login

// Protected routes
router.get('/profile', protect, (req, res) => {
    res.status(200).json({
        message: 'User profile accessed',
        user: req.user, // This contains user information from the `protect` middleware
    });
});

// Admin-only route
router.get('/admin-dashboard', protect, admin, (req, res) => {
    res.status(200).json({
        message: 'Welcome to the admin dashboard',
    });
});

module.exports = router;
