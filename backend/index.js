const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db'); // MongoDB connection
const authRoutes = require('./routes/authRoutes'); // Authentication routes
const restaurantRoutes = require('./routes/restaurantRoutes'); // Restaurant routes
const menuRoutes = require('./routes/menuRoutes'); // Menu routes
const paymentRoutes = require('./routes/paymentRoutes');
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use('/api/auth', authRoutes); // Existing authentication routes
app.use('/api/restaurants', restaurantRoutes); // Restaurant routes
app.use('/api/menu', menuRoutes); // Menu routes
app.use('/api/payments', paymentRoutes);
// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
