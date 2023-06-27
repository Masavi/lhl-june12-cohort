const math = require('../01-math');
const chai = require('chai');
const expect = chai.expect;

describe('Testing the addNumbersInArray from math.js', function() {

  it('should add 3, 4, and 5 and return 12 as a result', function() {
    const add_result = math.addNumbersInArray([3, 4, 5]);
    // assert.equal(add_result, 12);
    expect(add_result).to.be.equal(12);
  })

  it('should add 3, -3, and 3 and return 3 as a result', function() {
    const add_result = math.addNumbersInArray([3, -3, 3]);
    // assert.equal(add_result, 3);
    expect(add_result).to.be.equal(3);
  })

})