const React = require('react');
const Def = require('../default.jsx');

function edit(data) {
    return (
        <Def>
            <main>
                <h2>{ data.page.name }</h2>
                <form action="">
                    <label htmlFor="">Edit Page</label>
                    <br />
                    <input type="text" />
                    <button>EDIT</button>
                </form>
            </main>
        </Def>
    )
};

module.exports = edit;