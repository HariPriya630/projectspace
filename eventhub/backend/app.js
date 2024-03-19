// server.js or app.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config(); // Ensure .env variables are loaded
const mongoose = require('mongoose');

const eventRoutes = require('./src/routes/eventroutes');
const completedRoutes = require('./src/routes/completed');
const UserRouter =require('./src/routes/userRoutes')
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

// Routes
app.use(eventRoutes);
app.use(completedRoutes);
app.use(UserRouter)

app.use('/images',express.static('public/images'))

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
    app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
