const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).send('User not found');
    }

    // NOTE: In a real app, use bcrypt to hash & compare passwords
    if (existingUser.password !== password) {
      return res.status(401).send('Invalid password');
    }

    // Optionally generate JWT token here

    res.status(200).send('Login successful');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
