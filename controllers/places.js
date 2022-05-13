const router = require('express').Router();

let places = [
    {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/first-watch.jpg'
    }, 
    {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/olive-garden.webp'
    }
];

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