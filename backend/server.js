require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Import your custom relay test (created in Phase 1)
const checkZapier = require('./config/relay');

const app = express();

// --- 1. Middleware ---
// Allows your React app (usually on port 5173) to talk to this server
app.use(cors()); 

// Parses incoming JSON data from your Onboarding forms so the server can read it
app.use(express.json()); 

// --- 2. Initial Checks ---
// Verify the Zapier Webhook is present in the .env file
checkZapier();

// --- 3. Routes ---
// The main "Onboarding" route that will handle Zapier integration
// This points to the /backend/routes/onboarding.js file we'll build next
app.use('/api/onboarding', require('./routes/onboarding'));

// Placeholder routes for the rest of the ScaleReady features
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/grants', require('./routes/matcher'));

// --- 4. Health Check ---
// A simple way to verify the server is alive in your browser
app.get('/', (req, res) => {
  res.status(200).send('ScaleReady Backend Engine: ONLINE 🚀');
});

// --- 5. Global Error Handling ---
// Prevents the server from crashing if a request fails
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong on the server!' });
});

// --- 6. Start the Engine ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is purring on http://localhost:${PORT}`);
  console.log('Press Ctrl + C to stop the server');
});
