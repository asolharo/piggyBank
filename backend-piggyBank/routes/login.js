const express = require('express');
const {
  body
} = require('express-validator');

const router = express.Router();
const loginController = require('../controllers/login');


const isAuth = require('../middleware/auth');

const User = require('../models/user');

// POST add new user
router.post('/add-user',
  [
    body('email')
    .isEmail()
    .withMessage('Please enter a valid email.')
    .custom((value, {
      req
    }) => {
      return User.findOne({
        email: value
      }).then(userDoc => {
        if (userDoc) {
          return Promise.reject('E-Mail address already exists!');
        }
      });
    })
    .normalizeEmail(),
    body('password')
    .trim()
    .isLength({
      min: 5
    }),
    body('firstName')
    .trim()
    .not()
    .isEmpty(),
    body('lastName')
    .trim()
    .not()
    .isEmpty(),
    body('username')
    .trim()
    .not()
    .isEmpty()
  ],
  loginController.postAddUser);

// GET user by ID
router.get('/users/:userId', loginController.getUserById);

// PUT update user by ID
router.put('/edit-user/:userId', isAuth,
  [
    body('email')
    .isEmail()
    .withMessage('Please enter a valid email.')
    .custom((value, {
      req
    }) => {
      return User.findOne({
        email: value
      }).then(userDoc => {
        if (userDoc & userDoc.email !== value) {
          return Promise.reject('E-Mail address already exists!');
        }
      });
    })
    .normalizeEmail(),
    body('password')
    .trim()
    .isLength({
      min: 5
    }),
    body('firstName')
    .trim()
    .not()
    .isEmpty(),
    body('lastName')
    .trim()
    .not()
    .isEmpty(),
    body('username')
    .trim()
    .not()
    .isEmpty()
  ],
  loginController.putUpdateUser);

// DELETE user by ID
router.delete('/delete-user/:userId', isAuth, loginController.deleteUser);

//POST login user
router.post('/login', loginController.login);

module.exports = router;