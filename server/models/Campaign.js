const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  validatedBy: {
    type: String,
    required: true,
  },
  categories: {
    valid: [{ Email: String }],
    invalid: [{ Email: String }],
    risky: [{ Email: String }],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Campaign', CampaignSchema);
