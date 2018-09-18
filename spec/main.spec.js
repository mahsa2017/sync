const {expect } = require('chai');
const sinon = require('sinon');

const {
    blockMyEcho,
    asyncMyEcho,
    fetchSingleAuthor,
    fetchSingleBook,
    fetchAllAuthors,
    fetchBooks,
    fetchFilesAndLog,
    fetchContentOfFiles,
    fetchFileWithSingleCall
} = require('../main');

describe('BlockMyEcho', function(){
    it('should be a function', function () {
        expect(blockMyEcho).to.be.a('function');
    });
    it('should return an input', function(){ 
        this.timeout(5000);
        expect(blockMyEcho("woo")).to.equal("woo");
    });
});

describe('asyncMyEcho', function () {
    it('should be a function', function () {
        expect(asyncMyEcho).to.be.a('function');
    });
    it('should return an input', function (done) {
        this.timeout(5000);
        const str = 'woo';
        const cb = function(err, res){
            expect(res).to.equal(str);
            done()
        }
        asyncMyEcho(str, cb);
    });
});
describe('fetchSingleAuthor', function() {
    it('should be a function', function() {
        expect(fetchSingleAuthor).to.be.a('function');
    });
    it('should invoke the callback with no error', function(done){
        expect(err, 'Do not pass down the CB, declare your own or I will throw a book at you').to.be.null;
        done();
    });
    it('should invoke the callback with the authors name as the second argument', function(){
        fetchSingleAuthor(function(err, author) {
        expect(author).to.equal('Agatha Christie');
        done();
        });
    });
});

describe('fetchSingleBook', function() {
    it('should be a function', function(){
        expect(fetchSingleBook).to.be.a('function');
    });
    it('should invoke the callback with no error', function (done) { 
        fetchSingleBook(function(err){ 
            expect(err).to.be.null;
            done();
        });
    }).timeout(4000);
    it('should invoke the callback with the book as the second argument', function (done){
        fetchSingleBook(function (err, book){ 
            expect(book).to.be.equal('Crooked House');
            done();
        })
    }).timeout(4000);
});
describe('fetchAllAuthors', function() {
    it('should be a function', function(){
        expect(fetchAllAuthors).to.be.a('function');
    });

    it('should invoke the callback with no error', function(done) {
        fetchAllAuthors(function(err) {
          expect(err).to.be.null;
          done();
        });
    });
    it('should invoke the callback with an array of capitalised authors', function() {
        fetchAllAuthors(function(err, author){
            expect(author[0]).to.equal(author[0].toUpperCase());
            done();
        });
    });
});
describe('fetchBooks', () => {
    it('should be a function', function() {
        expect(fetchBooks).to.be.a('function');
    });
    it('should return an array', function(done) {
        fetchBooks(function(err, pairs) {
          expect(pairs).to.be.an('array');
          done();
        });
      }).timeout(4000);
      it('should return array of author and book objects', function(done) {
        fetchOpponents(function(err, pairs) {
          expect(pairs[0]).to.have.property('author');
          expect(pairs[0]).to.have.property('book');
          done();
        });
      }).timeout(4000);
      it('should return array of objects sorted alphabetically by hero names', function(done) {
        fetchOpponents(function(err, pairs) {
          expect(pairs).to.eql([
            {
              author: "Agatha Christie",
              book: "Crooked House"
            },
            {
              author: "J.K Rowling",
              book: "The Silkworm"
            },
            {
              author: "William Shakespeare",
              book: "Hamlet"
            },
            {
              author: "Edgar Allan Poe",
              book: "The Raven"
            },
            {
              author: "J. R. R Tolkien",
              book: "The Hobbit"
            },
            {
              author: "Charles Dickens",
              book: "Oliver Twist"
            },
            {
              author: "Oscar Wilde",
              book: "Intentions"
            },
            {
              author: "Mayu Angelou",
              book: "Mrs. Flowers"
            }
          ]);
          done();
        });
      }).timeout(4000);
});


describe('fetchContentOfFiles', function() {
    it('exists', function() {
      expect(fetchContentOfFiles).to.be.a('function');
    });
    it('should return a response for each file', function(done) {
      let fileNames = [1, 2, 3, 4, 5];
      function cb(err, files) {
        expect(files.length).to.equal(fileNames.length);
        done();
      }
      fetchContentOfFiles(fileNames, cb);
    });
    it('should invoke callback with filenames in order', function(done) {
      let fileNames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      function cb(err, files) {
        expect(files.length).to.equal(fileNames.length);
        fileNames.forEach(function(name, i) {
          expect(files[i]).to.equal(`File contents of ${name}`);
        });
        done();
      }
      fetchContentOfFiles(fileNames, cb);
    });
  });
  
  describe('fetchFilesAndLog', function() {
    it('should be a function', function() {
      expect(fetchFilesAndLog).to.be.a('function');
    });
    it('should log each file', function(done) {
      let spy = sinon.spy(console, 'log');
      const fileNames = [1, 2, 3, 4, 5, 6, 7];
      fetchFilesAndLog(fileNames, function() {
        expect(spy.callCount).to.equal(7);
        fileNames.forEach(fileName => {
          expect(spy.calledWith(`File contents of ${fileName}`)).to.be.true;
        });
        done();
      });
    }).timeout(6000);
  });
  
  describe('fetchFileWithSingleCall', function() {
    it('exists', function() {
      expect(fetchFileWithSingleCall).to.be.a('function');
    });
    it('responds with file name', function(done) {
      const fileName = 'TOP SECRET';
      function cb(err, file) {
        expect(file).to.equal(`File contents of ${fileName}`);
        done();
      }
      fetchFileWithSingleCall(fileName, cb);
    });
    it('The call back should only be called once', function(done) {
      const fileName = 'DO NOT OPEN';
      let counter = 0;
      function cb() {
        counter++;
      }
      fetchFileWithSingleCall(fileName, cb);
      setTimeout(function() {
        expect(counter).to.equal(1);
        done();
      }, 2000);
    }).timeout(3000);
  });
  

