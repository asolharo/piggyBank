const express = require('express');
const testRouter = require('./controllers/test');
require('dotenv').config()

// create instance of express server
const app = express();
// add the middleware to accept json HTTP requests
app.use(express.json());

// test endpoint
app.use('/ping', testRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});