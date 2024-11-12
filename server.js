// Load environment variables as the first step
require('dotenv').config();

// Now, require other modules
const express = require('express');
const { sequelize } = require('./src/models');
const userRoutes = require('./src/api/routes/userRoutes'); // Import user routes

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Example route to test the server
app.get('/', (req, res) => {
  res.send('Welcome to EasyWait!');
});

// Integrate user routes
app.use('/api/users', userRoutes); // Prefix user routes with /api/users

// Test the database connection and sync the models
sequelize.authenticate()
    .then(() => {
        console.log('PostgreSQL connection has been established successfully.');

        // Sync models with the database (altering existing tables if necessary)
        return sequelize.sync({ alter: true });
    })
    .then(() => {
        console.log('Models have been synchronized with the database.');

        // Start the server after the DB connection and sync are successful
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the PostgreSQL database:', error);
    });

// Gracefully shut down the app and close DB connection on SIGINT (Ctrl+C)
process.on('SIGINT', async () => {
  console.log('Closing the database connection...');
  await sequelize.close();
  console.log('Database connection closed');
  process.exit(0);
});