const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to verify and protect routes
const protect = async (req, res, next) => {
    let token;

    // Check if the Authorization header is provided and starts with 'Bearer'
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Extract token from Authorization header
            token = req.headers.authorization.split(' ')[1];

            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find the user by ID (excluding the password) and attach it to req.user
            req.user = await User.findById(decoded.userId).select('-password');

            if (!req.user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Continue to the next middleware or route handler
            next();
        } catch (error) {
            console.error('Token verification failed:', error);
            res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
        }
    } else {
        res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
};

// Middleware to restrict access to admin users only
const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        // User is an admin, allow access
        next();
    } else {
        res.status(403).json({ message: 'Access denied: Admins only' });
    }
};

module.exports = { protect, admin };
