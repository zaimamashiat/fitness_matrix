const express = require('express');
const userController = require('../controllers/UserController');

const authenticate = require('../middleware/AuthMiddleware');

const router = express.Router();

// create a user
router.post('/', userController.createUser);

// user login
router.post('/login', userController.loginUser);

// get all users
router.get('/', userController.getAllUsers);

// get a single user by ID
router.get('/:id',authenticate, userController.getUserById);

// get user profile
router.get('/profile', authenticate, userController.getUserProfile);

// update a user
router.put('/:id',authenticate, userController.updateUser);

// delete a user
router.delete('/:id',authenticate, userController.deleteUser);

module.exports = router;
