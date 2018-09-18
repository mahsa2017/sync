module.exports = function getBookName (author, cb) {
    setTimeout(function () {
        switch (author) {
            case 'AGATHA CHRISTIE':
                return cb(null, 'Crooked House');
            case 'J.K Rowling':
                return cb(null, 'The Silkworm');
            case 'William Shakespeare':
                return cb(null, 'Hamlet');
            case 'Edgar Allan Poe':
                return cb(null, 'The Raven');
            case 'J. R. R Tolkien':
                return cb(null, 'The Hobbit');
            case 'Charles Dickens':
                return cb(null, 'Oliver Twist');
            case 'Oscar Wilde':
                return cb(null, 'Intentions');
            case 'Mayu Angelou':
                return cb(null, 'Mrs. Flowers');
            default:
                return cb({message: 'Expand the mind sharpen the soul'});
        }
    }, Math.random() * 2000);
};
