const {expect} = require('chai');
const sinon = require('sinon');
const {
    getBookName,
    getFile,
    getManyFile,
    getAllAuthors
} = require('../utils/index');

describe('getBookName', () => {
    it('should be a function', function() {
      expect(getBookName).to.be.a('function');
    });
    it('should return correct correct Book for a single author', function(done) {
        getBookName('AGATHA CHRISTIE', function(err, author) {
        expect(author).to.equal('CROOKED HOUSE');
        done();
      });
    });
    it('should return err for invalid author input', function(done) {
        getBookName('J.B Homes', function(err) {
        expect(err.message).to.equal(
          'Expand the mind sharpen the soul'
        );
        done();
      });
    });
  });
  
  describe('getFile', function() {
    it('should be a function', function() {
      expect(getFile).to.be.a('function');
    });
    it('should invoke callback with contents of file', function(done) {
      const filename = 'Get me a book too';
      getFile(filename, function(err, contents) {
        expect(contents).to.equal(`File contents of ${filename}`);
        done();
      });
    });
  });
  
  describe('getManyFile', function() {
    it('should be a function', function() {
      expect(getManyFile).to.be.a('function');
    });
    it('should invoke callback with contents of file', function(done) {
      const filename = 'How many books have you read today';
      let called = false;
      getManyFile(filename, function(err, contents) {
        expect(contents).to.equal(`File contents of ${filename}`);
        if (!called) {
          called = true;
          done();
        }
      });
    });
    it('should invoke the callback 4 times', function(done) {
      const filename = 'Book Worm Alert';
      const spy = sinon.spy();
      getManyFile(filename, function() {
        spy();
        if (spy.callCount === 4) {
          done();
        }
      });
    });
  });
  
  describe('getManyFile', function() {
    it('should be a function', function() {
      expect(getManyFile).to.be.a('function');
    });
    it('should invoke callback with contents of file', function(done) {
      const filename = 'test';
      let called = false;
      getManyFile(filename, function(err, contents) {
        expect(contents).to.equal(`File contents of ${filename}`);
        if (!called) {
          called = true;
          done();
        }
      });
    });
    it('should invoke the callback 4 times', function(done) {
      const filename = 'test';
      const spy = sinon.spy();
      getManyFile(filename, function() {
        spy();
        if (spy.callCount === 4) {
          done();
        }
      });
    });
  });
  
  describe('getManyFile', function() {
    it('should be a function', function() {
      expect(getManyFile).to.be.a('function');
    });
    it('should invoke callback with contents of file', function(done) {
      const filename = 'test';
      let called = false;
      getManyFile(filename, function(err, contents) {
        expect(contents).to.equal(`File contents of ${filename}`);
        if (!called) {
          called = true;
          done();
        }
      });
    });
    it('should invoke the callback 4 times', function(done) {
      const filename = 'test';
      const spy = sinon.spy();
      getManyFile(filename, function() {
        spy();
        if (spy.callCount === 4) {
          done();
        }
      });
    });
  });
  
  describe('getAllAuthors', function() {
    it('should be a function', function() {
      expect(getAllAuthors).to.be.a('function');
    });
    it('should invoke the callback with an array of 8 elements', function(done) {
      getAllAuthors(function(err, heroes) {
        expect(heroes).to.be.an('array');
        expect(heroes.length).to.equal(8);
        done();
      });
    });
  });
  