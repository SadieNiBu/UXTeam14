const Event = require('../models/Event');
const mongoose = require('mongoose');

// Get all events
const getEvents = async (req, res) => {
    const events = await Event.find({}).sort({ createdAt: -1 });
    res.status(200).json(events);
};

// Get a single event
const getEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Event not found' });
    }

    const event = await Event.findById(id);

    if (!event) {
        return res.status(404).json({ error: 'Event not found' });
    }

    res.status(200).json(event);
};

// Create a new event
const createEvent = async (req, res) => {
    const { title, date, description, result, article } = req.body;
    
    try {
        const event = await Event.create({ title, date, description, result, article });
        res.status(200).json(event);
    }   catch (error) {
        res.status(400).json({error: error.message});
    }
};

// Delete an event
const deleteEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Event not found' });
    }

    const event = await Event.findOneAndDelete({ _id: id });

    if (!event) {
        return res.status(404).json({ error: 'Event not found' });
    }

    res.status(200).json(event);
};

// Update an event
const updateEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Event not found' });
    }

    const event = await Event.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!event) {
        return res.status(404).json({ error: 'Event not found' });
    }

    res.status(200).json(event);
};


module.exports = {
    getEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent
};