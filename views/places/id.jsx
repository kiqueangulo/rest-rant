const React = require('react');
const Def = require('../default.jsx');

function idInfo(data) {
    let info = data.place;
    
    return (
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={info.pic} alt={info.name} />
                        <h3>Located in {info.city}, {info.state}</h3>
                    </div>
                    <div className='col-sm-6'>
                        <h1>{info.name}</h1>
                        <div>
                            <h2>Rating</h2>
                            <p>Not Rated</p>
                        </div>
                        <div>
                            <h2>Description</h2>
                            <h3>
                                {info.showEstablished()}
                            </h3>
                            <h4>Serving {info.cuisines}</h4>
                        </div>
                        <div className='row'>
                            <a href={`/places/${data.place.id}/edit`} className='btn btn-warning col-sm-6'>Edit</a>
                            <form className='col-sm-6' action={`/places/${data.place.id}?_method=DELETE`} method='POST'>
                                <button type='submit' className='btn btn-danger col-sm-6'>Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
            </main>
        </Def>
    )
};

module.exports = idInfo;