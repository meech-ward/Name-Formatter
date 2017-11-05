const chai = require('chai');
const assert = chai.assert;

const invertName = require('../name-inverter');

describe('#invertName()', function() {

  context('with undefined name', function() {
    it('should throw an error');
  });

  context('with empty name', function() {
    it('should be empty string');
  });

  context('with single name', function() {
    it('should be single name');

    context('and extra spaces around the name', function() {
      it('should be single name with no spaces');
    });

  });

  context('with first and last name', function() {
    it('should be last name, first name');

    context('and extra spaces around the names', function() {
      it('should be last name, first name with no extra spaces');
    });
    
  });

  context('with honorific', function() {
    it('should be empty string');

    context('and first name', function() {
      it('should be <honorific first name>');

      context('and last name', function() {
        it('should be <honorific last name, first name>');
      });

    });

  });
 
});