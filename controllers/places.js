const router = require('express').Router();
const places = require('../models/places.js');

// Index (show restaurants)
router.get('/', (req, res) => {
    res.render('places/index', { places })
});

// New rest
router.get('/new', (req, res) => {
    res.render('places/new')
});

router.post('/', (req, res) => {
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    };
    if (!req.body.city) {
        req.body.city = 'Anytown'
    };
    if (!req.body.state) {
        req.body.state = 'USA'
    };

    places.push(req.body);
    res.redirect('/places')
});

// Show specific
router.get('/:id', (req, res) => {
    let page = places[req.params.id];

    res.render('places/id', { page })
});

// Edit
router.get('/:id/edit', (req, res) => {
    let page = places[req.params.id];
    res.render('places/editPlace', { page })
});

module.exports = router;