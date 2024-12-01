const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
