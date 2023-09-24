// app.js
const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');
const userRoutes = require('./routes/userRoutes');
require('./config/database');


app.use(express.json());

// Include API routes
app.use('/api', apiRoutes);
app.use('/api/v1', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

