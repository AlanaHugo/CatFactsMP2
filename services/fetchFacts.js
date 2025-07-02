const axios = require("axios");
const CatFact = require("../models/catFact");

async function fetchFacts() {
  try {
    const res = await axios.get("https://catfact.ninja/facts?limit=10");
    const facts = res.data.data;

    for (const fact of facts) {
      await CatFact.create({
        fact: fact.fact,
        length: fact.length,
      });
    }

    console.log("Cat facts fetched and saved.");
  } catch (err) {
    console.error("Error fetching facts:", err);
  }
}

module.exports = { fetchFacts };
