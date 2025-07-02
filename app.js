const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { swaggerUi, swaggerSpec } = require('./swagger');

const catFactRoutes = require('./routes/catFactRoutes');
const catBreedRoutes = require('./routes/catBreedRoutes');
const { fetchFacts } = require('./services/fetchFacts');
const { fetchBreeds } = require('./services/fetchBreeds');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    fetchFacts();
    fetchBreeds();
  })
  .catch(err => console.error('DB connection error:', err));

app.use('/api/facts', catFactRoutes);
app.use('/api/breeds', catBreedRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

