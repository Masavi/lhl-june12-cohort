const math = require('./01-math');
const assert = require('assert');

// Adding 3 and 4 gives 7 as a result when using the 'addTwoNumbers' function
const add_result = math.addTwoNumbers(3, 4);
assert.equal(add_result, 7);

// Adding 10 and -9 gives 1 as a result when using the 'addTwoNumbers' function
const add_result_2 = math.addTwoNumbers(10, -9);
assert.equal(add_result_2, 1);
assert.notEqual(add_result_2, -1);
