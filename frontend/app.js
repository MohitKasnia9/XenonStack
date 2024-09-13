const express = require('express');
const mongoose = require('mongoose');
const Property = require('./models/Property');
const app = express();

// Serve static files from 'frontend' folder
app.use(express.static('frontend'));

mongoose.connect('mongodb://localhost:27017/realestate');

// Fetch Property Listings
app.get('/properties', async (req, res) => {
    const properties = await Property.find();
    res.json(properties);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
