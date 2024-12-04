const express = require('express');
const userController = require('../controllers/UserController');

const authenticate = require('../middleware/AuthMiddleware');

const router = express.Router();

// Route to create a user
router.post('/', userController.createUser);

// Route for user login
router.post('/login', userController.loginUser);

// Route to get all users
router.get('/', userController.getAllUsers);

// Route to get a single user by ID
router.get('/:id',authenticate, userController.getUserById);

// Route to update a user
router.put('/:id', userController.updateUser);

// Route to delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;
