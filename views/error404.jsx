const React = require('react');
const Def = require('./default.jsx');

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Sorry, we can't find this page.</p>
                <img src="/images/not-found.jpg" alt="Ostrich that looks like screaming" />
                <br />
                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
};

module.exports = error404;