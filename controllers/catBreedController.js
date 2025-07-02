const CatBreed = require("../models/catBreed");

exports.getAllBreeds = async (req, res) => {
  const breeds = await CatBreed.find();
  res.json(breeds);
};

exports.getBreed = async (req, res) => {
  const breed = await CatBreed.findById(req.params.id);
  res.json(breed);
};

exports.createBreed = async (req, res) => {
  const newBreed = await CatBreed.create(req.body);
  res.status(201).json(newBreed);
};

exports.updateBreed = async (req, res) => {
  const updated = await CatBreed.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

exports.deleteBreed = async (req, res) => {
  await CatBreed.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
