const React = require('react');
const Def = require('../default.jsx');

function idInfo(data) {
    let info = data.place;
    
    return (
        <Def>
            <main>
                <h1>Specific Place</h1>
                <h2>{info.name}</h2>
                <img src={info.pic} alt={info.name} />
            </main>
        </Def>
    )
};

module.exports = idInfo;