const React = require('react');
const Def = require('../default.jsx');

function newPage() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form action="/places" method='POST'>
                    <div>
                        <label htmlFor="name">Place Name</label>
                        <input type="text" id='name' name='name' required />
                    </div>
                    <div>
                        <label htmlFor="pic">Place Picture</label>
                        <input type="url" id='pic' name='pic' />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input type="text" id='city' name='city' />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input type="text" id='state' name='state' />
                    </div>
                    <div>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input type="text" id='cuisines' name='cuisines' required />
                    </div>
                    <input type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
};

module.exports = newPage;