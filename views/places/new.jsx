const React = require('react');
const Def = require('../default.jsx');

function newPage() {
    return (
        <Def>
            <main>
                <form action="">
                    <label htmlFor="">New Rest Page</label>
                    <br />
                    <input type="text" />
                    <button>PUBLIC</button>
                </form>
            </main>
        </Def>
    )
};

module.exports = newPage;