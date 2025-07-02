const axios = require('axios');
const CatBreed = require('../models/catBreed');

async function fetchBreeds() {
  try {
    const res = await axios.get('https://catfact.ninja/breeds?limit=10');
    const breeds = res.data.data;

    for (const breed of breeds) {
      await CatBreed.create({
        breed: breed.breed,
        country: breed.country,
        origin: breed.origin,
        coat: breed.coat,
        pattern: breed.pattern
      });
    }

    console.log('Cat breeds fetched and saved.');
  } catch (err) {
    console.error('Error fetching breeds:', err);
  }
}

module.exports = { fetchBreeds };