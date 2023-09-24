// routes/api.js
// const express = require('express');
// const router = express.Router();
// const User = require('../models/user')

// // Create a new user
// router.post('/users', async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/users', userController.createUser);

// Get a list of all users
router.get('/users', userController.getAllUsers);

// Get a single user by ID
router.get('/users/:id', userController.getUserById);

// Update a user by ID
router.put('/users/:id', userController.updateUser);

// Delete a user by ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;

