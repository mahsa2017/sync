module.exports = function getSuperHeroes (cb) {
    setTimeout(function () {
        cb(null, [
            'Agatha Christie',
            'J.K Rowling',
            'William Shakespeare',
            'Edgar Allan Poe',
            'J. R. R Tolkien',
            'Charles Dickens',
            'Oscar Wilde',
            'Mayu Angelou'
        ]);
    }, Math.random() * 2000);
};