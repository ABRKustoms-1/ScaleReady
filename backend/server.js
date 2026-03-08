require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
// Enables communication between your React app and this server
app.use(cors()); 
// Allows the server to parse JSON data from your forms
app.use(express.json()); 

// Routes (To be created in Phase 3)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/onboarding', require('./routes/onboarding'));

// Health Check
app.get('/', (req, res) => res.send('ScaleReady Backend Engine: ONLINE 🚀'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
