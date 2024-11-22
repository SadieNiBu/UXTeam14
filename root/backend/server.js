require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const semesterRoutes = require('./routes/semesters');
const memberRoutes = require('./routes/members');
const eventRoutes = require('./routes/events');
const adminRoutes = require('./routes/admin');
const photoRoutes = require('./routes/photos');
const articleRoutes = require('./routes/articles');

const app = express();

// Middleware

// CORS configuration
app.use(cors({
    origin: 'https://cs.ucf.edu',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
}));

// Parse JSON bodies
app.use(express.json());

// Log middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Routes
app.use('/api/semesters', semesterRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/photos', photoRoutes);
app.use('/api/articles', articleRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        // Listen for requests
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB Connection Error:', error);
    });