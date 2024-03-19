const mongoose = require('mongoose');

const upcomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: String, required: true },
  total: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  last: { type: Boolean }
  // other fields as necessary
});

const Upcom = mongoose.model('Upcom', upcomSchema);

module.exports = Upcom;
