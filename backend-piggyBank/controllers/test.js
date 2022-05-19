const testRouter = require('express').Router();

testRouter.get('/', (req, res) => {
  console.log("someone pinged here");
  res.send('pong');
});

module.exports = testRouter;