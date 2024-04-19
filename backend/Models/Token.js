const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Educator_info', required: true },
  expiresAt: { type: Date, required: true }
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
