const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Schema
const emailSchema = new mongoose.Schema({
  filename: String,
  validatedBy: String,
  categories: {
    valid: [{ Email: String }],
    invalid: [{ Email: String }],
    risky: [{ Email: String }]
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

// Model
const EmailHistory = mongoose.model('EmailHistory', emailSchema);

// POST: Save validated emails
router.post('/emails', async (req, res) => {
  try {
    const { filename, validatedBy, categories } = req.body;

    const newRecord = new EmailHistory({
      filename,
      validatedBy,
      categories
    });

    await newRecord.save(); // Save to MongoDB
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving to DB:', error);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

// GET: Fetch history
router.get('/emails', async (req, res) => {
  try {
    const history = await EmailHistory.find().sort({ uploadedAt: -1 });
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

// DELETE: Delete an email record by ID
router.delete('/emails/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await EmailHistory.findByIdAndDelete(id);
    res.status(200).json({ message: 'Email history deleted successfully.' });
  } catch (error) {
    console.error('Error deleting record:', error);
    res.status(500).json({ error: 'Failed to delete record' });
  }
});

module.exports = router;
