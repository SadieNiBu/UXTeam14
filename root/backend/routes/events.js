const express = require('express');
const {
    getEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent
} = require('../controllers/eventController');

const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

router.get('/', getEvents);

router.get('/:id', getEvent);

// require auth for all subsequent routes
router.use(requireAuth);

router.post('/', createEvent);

router.delete('/:id', deleteEvent);

router.patch('/:id', updateEvent);

module.exports = router;
