const express = require('express');
const Location = require('../models/Location');
const router =  express.Router();

// GET route to get all locations
router.get('/locations', async (req, res) => {
    try {
        const location = await Location.find();
        res.json(location);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST route to add new location
router.post('/locations', async (req, res) => {
    try {
        const location = new Location(req.body);
        const savedLocation = await location.save();
        res.status(201).json(savedLocation);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
})

module.exports = router;