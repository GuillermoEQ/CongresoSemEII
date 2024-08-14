const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/usersRoutes');
const activitiesRoutes = require('./routes/activitiesRoutes');
const studentsRoutes = require('./routes/studentsRoutes');
const attendancesRoutes = require('./routes/attendancesRoutes');
const essaysRoutes = require('./routes/essaysRoutes');
const lecturersRoutes = require('./routes/lecturersRoutes');
const medicalRecordsRoutes = require('./routes/medical_recordsRoutes');
const socialMediasRoutes = require('./routes/social_mediasRoutes');
const registersRoutes = require('./routes/registersRoutes');
const staffsRoutes = require('./routes/staffsRoutes');


const sequelize = require('./config/db.config');
require('dotenv').config();

const port  = process.env.PORT || 3000;
const version = "v1"

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

// ALL ROUTES

app.use(`/api/${version}/users`, usersRoutes); // user routes
app.use(`/api/${version}/activities`, activitiesRoutes); // activities routes
app.use(`/api/${version}/students`, studentsRoutes); // activities routes

app.use(`/api/${version}/attendances`, attendancesRoutes); // attendances routes
app.use(`/api/${version}/essays`, essaysRoutes); // essays routes
app.use(`/api/${version}/lecturers`, lecturersRoutes); // lecturer routes
app.use(`/api/${version}/medical_records`, medicalRecordsRoutes); // medical records routes
app.use(`/api/${version}/social_medias`, socialMediasRoutes); // social medias routes
app.use(`/api/${version}/registers`, registersRoutes); // registers routes
app.use(`/api/${version}/staffs`, staffsRoutes); // staffs routes



// SERVER 
const server = http.createServer(app);

server.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync(); // Sincroniza el modelo con la base de datos
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server is running on http://localhost:${port}`);
});




