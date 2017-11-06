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
  
  context('when name is undefined', function() {
    it('should throw an error', function() {
      assert.throws(nameFormatter.invertName);
    });
  });
  
  context('when passed an empty string', function() {
    it('should return an empty string', function() {
      assertNameFormatterInvertsName(nameFormatter, "", "");
    });
  });
  
  context('when passed a single name', function() {
    it('should return a single name', function() {
      assertNameFormatterInvertsName(nameFormatter, "name", "name");
    });

    context('with extra spaces', function() {
      it('should return a single name', function() {
        assertNameFormatterInvertsName(nameFormatter, "   name  ", "name");
      });
    });
  });
  
  context('when passed a first and last-name', function() {
    it('should return a last-name, first-name', function() {
      assertNameFormatterInvertsName(nameFormatter, "first last", "last, first");
    });

    context('with extra spaces around the names', function() {
      it('should return a last-name, first-name', function() {
        assertNameFormatterInvertsName(nameFormatter, "  first  last  ", "last, first");
      });
    });
  });
  
  context('when passed an honorific', function() {
    it('should return an empty string', function() {
      assertNameFormatterInvertsName(nameFormatter, "Dr.", "");
    });

    context('with a first-name', function() {
      it('should return honorific first-name', function() {
        assertNameFormatterInvertsName(nameFormatter, "Dr. first", "Dr. first");
      });

      context('with a last-name', function() {
        it('should return a honorific last-name, first-name', function() {
          assertNameFormatterInvertsName(nameFormatter, "Dr. first Last", "Dr. Last, first");
        });

        context('with extra spaces around the names', function() {
          it('should return a honorific last-name, first-name', function() {
            assertNameFormatterInvertsName(nameFormatter, "   Dr.   first   Last  ", "Dr. Last, first");
          });
        });
      });
    });
  });
});