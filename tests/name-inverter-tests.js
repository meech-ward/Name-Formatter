const chai = require('chai');
const assert = chai.assert;

const invertName = require('../name-inverter');

describe('#invertName()', function() {

  it('should throw an error when name is undefined', function() {
    assert.throws(invertName);
  });
  
  it('should return an empty string when passed an empty string');
  it('should return a single name when passed a single name');
  it('should return a single name when passed a single name with extra spaces');
  it('should return a last-name, first-name when passed a first and last-name');
  it('should return a last-name, first-name when passed a first and last-name with extra spaces around the names');
  it('should return an empty string when passed mr.');
  it('should return mr. first-name when passed mr. first-name');
  it('should return a mr. last-name, first-name when passed mr. first-name last-name');
 
});