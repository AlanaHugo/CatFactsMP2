const mongoose = require("mongoose");

const catBreedSchema = new mongoose.Schema({
  breed: String,
  country: String,
  origin: String,
  coat: String,
  pattern: String,
});

module.exports = mongoose.model("CatBreed", catBreedSchema);
