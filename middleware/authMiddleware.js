// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Secret key for JWT verification (replace with your actual secret)
const JWT_SECRET = 'your-secret-key';

// Custom authentication middleware
const authenticate = (req, res, next) => {
  // Get the JWT token from the request header
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  try {
    // Verify the JWT token using the secret key
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach the decoded user information to the request object
    req.body.username = decoded.username;
    
    // Call next() to proceed with the next middleware or route handler
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

module.exports = { authenticate };
