const router = require('express').Router();
const db = require('../models');

// Index (show restaurants)
router.get('/', (req, res) => {
    db.Place.find()
        .then( places => res.render('places/index', { places }))
        .catch( err => {
            console.log(err);
            res.render('error404')
        })
});

router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => res.redirect('/places'))
        .catch(err => {
            console.log(`err ${err}`);
            res.render('error404')
        })
});

// New rest
router.get('/new', (req, res) => {
    res.render('places/new')
});

// Show specific
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => res.render('places/id', { place }))
        .catch(err => {
            console.log(`err ${err}`);
            res.render('error404')
        })
});

// Redirect from Edit to Show (id)
router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
});

// Delete
router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
});

// Edit
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => res.render('places/editPlace', { place }))
        .catch(err => {
            console.log(`err ${err}`);
            res.render('error404')
    })
});

module.exports = router;