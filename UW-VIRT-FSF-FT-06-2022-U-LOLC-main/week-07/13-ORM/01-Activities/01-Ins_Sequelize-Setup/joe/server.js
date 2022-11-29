require("dotenv").config();
const express = require('express');

// Import the connection object
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Kitten = require("./models/kitten.js")
const Octopus = require("./models/octopus.js")
const allRoutes = require("./controllers")

app.use(allRoutes);

// Connect to the database before starting the Express.js server
sequelize.sync({force:false}).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
