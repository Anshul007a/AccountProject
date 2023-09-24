// controllers/userController.js
const User = require('../models/user');
const userToken=require('../utils/jwt')
const userService=require('../services/userService')

//register
exports.register=async(req,res)=>{

  try{
    const newUser = new User(req.body);
    await newUser.save();

    // Generate a JWT token with user data (e.g., user ID and username)
  
    const token = userToken.generateToken(req.body)  

  // Return the token in the response
    res.status(201).json({ token });



  }
  catch(err){

  }
//res.status(200).json({msg:"user resgister"})
}

//login
exports.login=async(req,res)=>{

  res.status(200).json({msg:"user login"})
}

// Create a new user
exports.createUser = async (req, res) => {
  try {
    console.log("I'm A new ",req.body)
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a list of all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  try {
    //const user = await User.findById(req.params.id);
    const user=await userService.userById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log("I'm A new ",user)


    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
