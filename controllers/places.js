const router = require('express').Router();
const db = require('../models');

// Index (show restaurants)
router.get('/', (req, res) => {
    db.PLace.find()
        .then( places => res.render('places/index', { places }))
        .catch( err => {
            console.log(err);
            res.render('error404')
        })
});

router.post('/', (req, res) => {
    res.send('POST /places stub')
});

// New rest
router.get('/new', (req, res) => {
    res.render('places/new')
});

// Show specific
router.get('/:id', (req, res) => {
    res.send('GET /places/:id stub')
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
    res.send('GET edit form stub')
});

module.exports = router;