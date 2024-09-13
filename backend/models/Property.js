const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String
});

module.exports = mongoose.model('Property', PropertySchema);
