const chai = require('chai');
const assert = chai.assert;

const invertName = require('../name-inverter');

describe('#invertName()', function() {

  it('should throw an error when name is undefined', function() {
    assert.throws(invertName);
  });

  it('should return an empty string when passed an empty string', function() {
    assert.equal(invertName(""), "");
  });

  it('should return a single name when passed a single name', function() {
    assert.equal(invertName("name"), "name");
  });

  it('should return a single name when passed a single name with extra spaces', function() {
    assert.equal(invertName("  name  "), "name");
  });

  it('should return a last-name, first-name when passed a first and last-name', function() {
    assert.equal(invertName("first last"), "last, first");
  });

  it('should return a last-name, first-name when passed a first and last-name with extra spaces around the names', function() {
    assert.equal(invertName("  first   last  "), "last, first");
  });

  it('should return an empty string when passed mr.', function() {
    assert.equal(invertName("Mr."), "");
  });

  it('should return mr. first-name when passed mr. first-name', function() {
    assert.equal(invertName("Mr. first"), "Mr. first");
  });

  it('should return a mr. last-name, first-name when passed mr. first-name last-name');
 
});