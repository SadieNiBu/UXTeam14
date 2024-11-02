require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const memberRoutes = require('./routes/members');
const eventRoutes = require('./routes/events');

const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method); // Log all requests
    next();
});

// Routes
app.use('/api/members', memberRoutes);
app.use('/api/events', eventRoutes);
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Server is running on port ' + process.env.PORT);
          });
    })
    .catch((error) => {
        console.log(error);
    });
