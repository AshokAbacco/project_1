// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const signupRoute = require('./routes/signup');
const signinRoute = require('./routes/signin');
const emailRoute = require('./routes/email'); // 👈 Add this

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/signup', signupRoute);
app.use('/signin', signinRoute);
app.use('/api', emailRoute); // 👈 Mount the email route

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userdata', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));



// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});


