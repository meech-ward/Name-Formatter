const chai = require('chai');
const assert = chai.assert;

const NameFormatter = require('../name-formatter');

describe('#nameFormatter.invertName()', function() {

  it('should throw an error when name is undefined', function() {
    const nameFormatter = new NameFormatter();
    assert.throws(nameFormatter.invertName);
  });

  it('should return an empty string when passed an empty string', function() {
    const nameFormatter = new NameFormatter();
    assert.equal(nameFormatter.invertName(""), "");
  });

  it('should return a single name when passed a single name', function() {
    const nameFormatter = new NameFormatter();
    assert.equal(nameFormatter.invertName("name"), "name");
  });

  it('should return a single name when passed a single name with extra spaces', function() {
    const nameFormatter = new NameFormatter();
    assert.equal(nameFormatter.invertName("  name  "), "name");
  });

  it('should return a last-name, first-name when passed a first and last-name', function() {
    const nameFormatter = new NameFormatter();
    assert.equal(nameFormatter.invertName("first last"), "last, first");
  });

  it('should return a last-name, first-name when passed a first and last-name with extra spaces around the names', function() {
    const nameFormatter = new NameFormatter();
    assert.equal(nameFormatter.invertName("  first   last  "), "last, first");
  });

  it('should return an empty string when passed mr.', function() {
    const nameFormatter = new NameFormatter();
    assert.equal(nameFormatter.invertName("Mr."), "");
  });

  it('should return mr. first-name when passed mr. first-name', function() {
    const nameFormatter = new NameFormatter();
    assert.equal(nameFormatter.invertName("Mr. first"), "Mr. first");
  });

  it('should return a mr. last-name, first-name when passed mr. first-name last-name', function() {
    const nameFormatter = new NameFormatter();
    assert.equal(nameFormatter.invertName("Mr. first Last"), "Mr. Last, first");
  });
 
});