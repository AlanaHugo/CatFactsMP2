const CatFact = require("../models/catFact");

exports.getAllFacts = async (req, res) => {
  const facts = await CatFact.find();
  res.json(facts);
};

exports.getFact = async (req, res) => {
  const fact = await CatFact.findById(req.params.id);
  res.json(fact);
};

exports.createFact = async (req, res) => {
  const newFact = await CatFact.create(req.body);
  res.status(201).json(newFact);
};

exports.updateFact = async (req, res) => {
  const updated = await CatFact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

exports.deleteFact = async (req, res) => {
  await CatFact.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
