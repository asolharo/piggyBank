require('dotenv').config()
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const session = require('express-session');
const MongoDB = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');


// routes
// const testRouter = require('./controllers/test');
const userRoute = require('./routes/login');

// connect to database
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.port || 3000;

// initialize object in database
const db = new MongoDB({
  uri: MONGODB_URI,
  user: []
});

// create instance of express server
const app = express();

//Swagger set up to test database endpoints

// allow requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE'
  );
  res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
  next();
})

// access in routes
app.db = db;

// add the middleware to accept json HTTP requests
app.use(express.json());
app.use(bodyParser.json());

// Using the routes as defined
app.use('/user', userRoute);
// test route endpoint
// app.use('/ping', testRouter)
app.use((err, req, res, next) => {
  console.log(error);
  const message = error.statusCode || 500;
  const data = error.data;
  res.status(status).json({
    message: message,
    data: data
  });
});


// connect to database
mongoose.connect(MONGODB_URI)
  .then(result => {
    app.listen(PORT);
    console.log(`Successful connection to database`);
    console.log(`Server running on port ${PORT}`);
  })
  .catch(err => {
    console.log(err);
  })