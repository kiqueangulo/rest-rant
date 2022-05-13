const router = require('express').Router();
const places = require('../models/places.js');

router.get('/', (req, res) => {
    res.render('places/index', { places })
});

router.get('/new', (req, res) => {
    res.render('places/new')
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('POST /places')
});

router.get('/:id', (req, res) => {
    let page = places[req.params.id];

    res.render('places/id', { page })
});

router.get('/:id/edit', (req, res) => {
    let page = places[req.params.id];
    res.render('places/editPlace', { page })
});

module.exports = router;