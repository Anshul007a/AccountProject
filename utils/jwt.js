// app/utils/jwt.js
const jwt = require('jsonwebtoken');

// Secret key for signing JWT tokens (replace with your actual secret)
const JWT_SECRET = 'your-secret-key';

// Generate a JWT token with a payload
const generateToken = (payload) => {
    console.log("mypay",payload)
  // Sign the token with the secret key and set an expiration time (e.g., 1 hour)
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  return token;
};

module.exports = { generateToken };
