const React = require('react');
const Def = require('../default.jsx');

function idInfo(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )

    let rating = (
        <h3 className='inactive'> Not yet rated</h3>
    )

    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)

        let avergaeRating = sumRatings / data.place.comments.length

        rating = <h3>{Math.round(avergaeRating)} stars</h3>

        comments = data.place.comments.map(c => {
            return (
                <div className='border' key={c.id}>
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
                            {rating}
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
                <div>
                    <h2>Got Your Own Rant or Rave?</h2>
                    <form action={`/places/${data.place.id}/comment`} method='POST'>
                        <div className='form-group'>
                            <label htmlFor="content">Content</label>
                            <input className='form-control' type="text" id='content' name='content' required />
                        </div>
                        <div className='row'>
                            <div className='form-group'>
                                <label htmlFor="author">Author</label>
                                <input className='form-control' type="text" id='author' name='author' required />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="rating">Star Rating</label>
                                <input type="range" step='0.5' name="stars" id="rating" min='0' max='5' required />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="rant">Rant?</label>
                                <input type="checkbox" name="rant" id="rant" />
                            </div>
                        </div>
                        <input type="submit" value="Add Comment" />
                    </form>
                </div>
            </main>
        </Def>
    )
};

module.exports = idInfo;