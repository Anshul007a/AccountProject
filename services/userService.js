const User = require('../models/user');

exports.userById = async (userId) => {
    try {
        console.log("line555",userId)
      const user = await User.findById(userId);
      if (!user) {
        return 'User not found';
      }
      //console.log("I'm A new ",user)
       return user;
  
     // res.status(200).json(user);
    } catch (err) {
      //res.status(500).json({ error: err.message });
    }
  };