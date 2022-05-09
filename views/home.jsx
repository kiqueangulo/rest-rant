const React = require('react');
const Def = require('./default.jsx');

function home() {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
};

module.exports = home;