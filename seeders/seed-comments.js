const db = require('../models');

async function seed() {
    let place = await db.Place.findOne({ name: 'H-Thai-ML' });

    // Create a fake sample comment
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    });

    // Add the comment id to the place comments array
    place.comments.push(comment.id);

    // Save the comments after being pushed
    await place.save();

    process.exit()
};

seed();