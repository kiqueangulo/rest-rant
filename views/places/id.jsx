const React = require('react');
const Def = require('../default.jsx');

function idInfo(data) {
    let info = data.place;
    
    return (
        <Def>
            <main>
                <img src={info.pic} alt={info.name} />
                <div>
                    <h1>{info.name}</h1>
                    <div>
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <p>Located in {info.city}, {info.state} and serving {info.cuisines}</p>
                    </div>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
                <form action={`/places/${data.id}?_method=DELETE`} method='POST'>
                    <button type='submit' className='btn btn-danger'>Delete</button>
                </form>
            </main>
        </Def>
    )
};

module.exports = idInfo;