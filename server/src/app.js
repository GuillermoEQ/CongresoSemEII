const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./config/db.config.js');
const { Sequelize } = require('sequelize');
require('dotenv').config();

// ROUTES IMPORT 
const activitieRoutes = require('./routes/activitiesRoutes');

const PORT = process.env.PORT || 3000;
const version = "v1";

const app = express();
const corsOptions = {
  origin: 'http://localhost:8081',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Congreso App'
  });
});

app.use(`/api/${version}/activities`, activitieRoutes);

// Sync database and run migrations automatically
sequelize.sync()
  .then(() => {
    console.log('Database synchronized successfully.');
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to sync database:', err);
    process.exit(1);
  });
