const mongoose = require('mongoose');

const catFactSchema = new mongoose.Schema({
  fact: String,
  length: Number
});

module.exports = mongoose.model('CatFact', catFactSchema);