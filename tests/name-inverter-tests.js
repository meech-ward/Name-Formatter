const chai = require('chai');
const assert = chai.assert;

const NameFormatter = require('../name-formatter');


function assertNameFormatterInvertsName(nameFormatter, inputName, expectedOutput) {
  assert.equal(nameFormatter.invertName(inputName), expectedOutput);
}


describe('invert name', function() {

  let nameFormatter;
  beforeEach(function() {
    nameFormatter = new NameFormatter();
  });
  
  it('should throw an error when name is undefined', function() {
    assert.throws(nameFormatter.invertName);
  });

  it('should return an empty string when passed an empty string', function() {
    assertNameFormatterInvertsName(nameFormatter, "", "");
  });

  it('should return a single name when passed a single name', function() {
    assertNameFormatterInvertsName(nameFormatter, "name", "name");
  });

  it('should return a single name when passed a single name with extra spaces', function() {
    assertNameFormatterInvertsName(nameFormatter, "   name  ", "name");
  });

  it('should return a last-name, first-name when passed a first and last-name', function() {
    assertNameFormatterInvertsName(nameFormatter, "first last", "last, first");
  });

  it('should return a last-name, first-name when passed a first and last-name with extra spaces around the names', function() {
    assertNameFormatterInvertsName(nameFormatter, "  first  last  ", "last, first");
  });

  it('should return an empty string when passed Dr.', function() {
    assertNameFormatterInvertsName(nameFormatter, "Dr.", "");
  });

  it('should return Dr. first-name when passed Dr. first-name', function() {
    assertNameFormatterInvertsName(nameFormatter, "Dr. first", "Dr. first");
  });

  it('should return a Dr. last-name, first-name when passed Dr. first-name last-name', function() {
    assertNameFormatterInvertsName(nameFormatter, "Dr. first Last", "Dr. Last, first");
  });

  it('should return a Dr. last-name, first-name when passed Dr. first-name last-name with extra spaces', function() {
    assertNameFormatterInvertsName(nameFormatter, "   Dr.   first   Last  ", "Dr. Last, first");
  });
 
});