require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home Page')
});

app.use('/places', require('./controllers/places.js'));

app.get('*', (req, res) => {
    res.status(404).send(`
        <h1>404 Page</h1>
    `)
});

app.listen(PORT, () => {
    console.log('Active')
});