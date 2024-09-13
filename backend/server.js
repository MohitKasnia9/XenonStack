const express = require('express');
const mongoose = require('mongoose');
const Property = require('./models/Property');
const app = express();

app.use(express.static('frontend'));

mongoose.connect('mongodb://localhost:27017/realestate');

// Fetch Property Listings
app.get('/properties', async (req, res) => {
    const properties = await Property.find();
    res.json(properties);
});

// Start the server on port 4000
app.listen(4000, () => {
    console.log('Server running on port 4000');
});
