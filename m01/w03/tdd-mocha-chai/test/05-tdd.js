const math = require('../01-math');
const chai = require('chai');
const expect = chai.expect;

describe('Testing the isOdd function from math.js', function() {

  it('should return true when passing the number 1', function() {
    const result = math.isOdd(1);
    expect(result).to.be.equal(true);
  })

  it('should return true when passing the number 77', function() {
    const result = math.isOdd(77);
    expect(result).to.be.equal(true);
  })

  it('should return false when passing the number 2', function() {
    const result = math.isOdd(2);
    expect(result).to.be.equal(false);
  })

  it('should return false when passing the number 20', function() {
    const result = math.isOdd(20);
    expect(result).to.be.equal(false);
  })

  it('should return an error message when passing a string', function () {
    const result = math.isOdd('dog');
    expect(result).to.be.equal('There is an error!');
  })

  it('should return an error message when passing an array', function () {
    const result = math.isOdd(['one', 'two', 'three']);
    expect(result).to.be.equal('There is an error!');
  })

})