const express = require('express');

const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init middleware (see data on req.body)
app.use(express.json({ extended: false }));

// Routes
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/history', require('./routes/api/history'));
// app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server stated on port ${PORT}`));
