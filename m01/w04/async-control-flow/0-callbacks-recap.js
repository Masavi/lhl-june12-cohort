// Higher Order Function
function showNumbersAndExecuteOperation(number1, number2, operation) {
  console.log('Numbers passed:', number1, number2);
  // "operation" is a CALLBACK
  return operation(number1, number2);
}

// Here i am NOT passing a callback...
// showNumbersAndExecuteOperation(5, 7);

/**
 * How can i pass a callback to a Higher Order Function?
 */

const result1 = showNumbersAndExecuteOperation(3, 3, (n1, n2) => { return n1 * n2 });
console.log('Result:', result1);

const multiplyTwoNumbers = (n1, n2) => { return n1 * n2 }
const result2 = showNumbersAndExecuteOperation(4, 6, multiplyTwoNumbers);
console.log('Result:', result2);