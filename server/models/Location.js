const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        street: {
        type: String,
        required: true,
        trim: true,
        },
        city: {
        type: String,
        required: true,
        trim: true,
        },
        state: {
        type: String,
        required: true,
        trim: true,
        },
        zipCode: {
        type: String,
        required: true,
        trim: true,
        }
    },
    type: [ {
        type: String,
        required: true,
        enum: ['Indoor Basketball Gym', 'Volleyball Court', 'Tennis Court', 'Pool', 'Pickleball Court'],
    } ],
    membership_required: {
        type: Boolean,
        dafault: false,
    },
    contact: {
        type: String,
        required: true,
    },
    pricing: {
        type: String,
        required: true,
    },
    availability: {
        type: [{
            date: {
                type: Date,
                required: true,
            },
            slots: [{
                start_time: datetime,
                end_time: datetime,
                is_booked: {
                    type: Boolean,
                    default: false,
                }
            }]
        }],
        required: true,
    },
    amenities: [ {
        type: String,
        enum: ['Parking', 'Showers', 'Lockers']
    }],
    images: [ {
        type: String,
        required: true,
    }]
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;