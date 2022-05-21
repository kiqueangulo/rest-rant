const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    pic: {
        type: String,
        default: 'https://images.squarespace-cdn.com/content/v1/56a2785c69a91af45e06a188/1560199097828-LPTTHOURLNQHK05XFEGW/Restaurant-Hire-Talent.png'
    },
    cuisines: {
        type: String,
        required: true
    },
    city: {
        type: String,
        default: 'Anytown'
    },
    state: {
        type: String,
        default: 'USA'
    },
    founded: Number
});

module.exports = mongoose.model('Place', placeSchema);