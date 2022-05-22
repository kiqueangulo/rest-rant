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
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?!'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    }
});

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
};

module.exports = mongoose.model('Place', placeSchema);