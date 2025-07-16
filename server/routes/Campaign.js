const express = require('express');
const router = express.Router();
const Campaign = require('../models/Email');

router.post('/campaign-history', async (req, res) => {
  console.log('POST body:', req.body); // ✔️ For debugging
  const { filename, validatedBy, categories } = req.body;
  try {
    const campaign = new Campaign({ filename, validatedBy, categories });
    const saved = await campaign.save();
    console.log('Saved to DB:', saved._id);
    res.status(201).json(saved);
  } catch (err) {
    console.error('Error saving campaign:', err);
    res.status(500).json({ error: 'Save failed' });
  }
});

router.get('/campaign-history', async (req, res) => {
  const campaigns = await Campaign.find().sort({ createdAt: -1 });
  res.json(campaigns);
});

module.exports = router;
