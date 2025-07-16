const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  filename: String,
  validatedBy: String,
  categories: { valid: [String], invalid: [String], risky: [String] },
  createdAt: { type: Date, default: Date.now, expires: 2592000 }
});
module.exports = mongoose.model('Email', CampaignSchema);
