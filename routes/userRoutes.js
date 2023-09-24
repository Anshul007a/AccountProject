// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {authenticate}=require('../middleware/authMiddleware')

//register
router.post('/register',userController.register)

//login
router.post('/login',userController.login)

// Create a new user
router.post('/users', userController.createUser);

// Get a list of all users
router.get('/users', authenticate,userController.getAllUsers);

// Get a single user by ID
router.get('/users/:id', userController.getUserById);

// Update a user by ID
router.put('/users/:id', userController.updateUser);

// Delete a user by ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
