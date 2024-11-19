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
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method); // Log all requests
    next();
});

app.use(cors({
    origin: 'https://ucf-c3-team-website-api.onrender.com',
    optionsSuccessStatus: 200
}));
app.options('*', cors());


// Routes
app.use('/api/semesters', semesterRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/photos', photoRoutes);
app.use('/api/articles', articleRoutes);
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
