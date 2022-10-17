const mongoose = require('mongoose');

const objectSchema = new mongoose.Schema ({

    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    nametype: {
        type: String,
        required: true
    },
    recclass: {
        type: String,
        required: true
    },
    mass: {
        type: Number,
        required: true
    },
    fall: {
        type: String,
        required: true
    },
    year: {
        type: Date,
        required: true
    },
    reclat: {
        type: Number,
        required: true
    },
    reclong:{
        type: Number,
        required: true
    },
    geolocation: {
        latitude: {
            type: Number,
            required: false
        },
        longitude:{
            type: Number,
            required: false
        }
    }
    
});

const landModel = mongoose.model('landings', objectSchema);

module.exports = landModel;