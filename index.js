require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home')
});

app.use('/places', require('./controllers/places.js'));

app.get('*', (req, res) => {
    res.render('error404')
});

app.listen(PORT, () => {
    console.log('Active at port', PORT)
});