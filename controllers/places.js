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
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error: ';
                
                for (let field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. ${err.errors[field].message}`
                };

                res.render('places/new', { message })
            } else {
                res.render('error404')
            }
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
    db.Place.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
        .then(updatedRest => res.redirect(`/places/${req.params.id}`))
        .catch(err => res.render('error404'))
});

// Delete
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(deletedRest => res.status(303).redirect('/places'))
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