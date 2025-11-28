const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  ticketType: { type: String, default: 'General' },
  age: { type: Number },
  gender: { type: String },
  address: { type: String },
  emergencyContact: { type: String },
  notes: { type: String },
  paymentImage: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', RegistrationSchema);
