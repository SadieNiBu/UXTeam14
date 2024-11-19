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
    origin: 'https://cs.ucf.edu',
    optionsSuccessStatus: 200
}));
app.options('*', cors());

// Serve static files from the React app at /CompetitionTeam
app.use('/CyberCompetitionTeam', express.static(path.join(__dirname, 'build')));


// Routes
app.use('/CyberCompetitionTeam/api/semesters', semesterRoutes);
app.use('/CyberCompetitionTeam/api/members', memberRoutes);
app.use('/CyberCompetitionTeam/api/events', eventRoutes);
app.use('/CyberCompetitionTeam/api/admin', adminRoutes);
app.use('/CyberCompetitionTeam/api/photos', photoRoutes);
app.use('/CyberCompetitionTeam/api/articles', articleRoutes);
app.use('/CyberCompetitionTeam/uploads', express.static('uploads'));

// Catch-all handler for React Router
app.get('/CyberCompetitionTeam/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

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
