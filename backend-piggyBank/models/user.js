const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  password: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  accountBalance: {
    type: mongoose.Types.Decimal128
  }
});

module.exports = mongoose.model('User', userSchema);