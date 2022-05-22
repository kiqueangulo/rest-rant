const React = require('react');
const Def = require('../default.jsx');

function idInfo(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )

    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>
                        {c.rant ? 'Rant! >:v' : 'Rave! <3'}
                    </h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <b>- {c.author}</b>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    
    return (
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                    <div className='col-sm-6'>
                        <h1>{data.place.name}</h1>
                        <div>
                            <h2>Rating</h2>
                            <p>Not Rated</p>
                        </div>
                        <div>
                            <h2>Description</h2>
                            <h3>
                                {data.place.showEstablished()}
                            </h3>
                            <h4>Serving {data.place.cuisines}</h4>
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
                    {comments}
                </div>
            </main>
        </Def>
    )
};

module.exports = idInfo;