function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function addNumbersInArray(arrayOfNumbers) {
  let sum = 0;

  for (const numberInArray of arrayOfNumbers) {
    sum = sum + numberInArray;
  }

  return sum;
}

// odd number if it is not divisible by two
function isOdd(number) {
  if (typeof number !== 'number') {
    return 'There is an error!';
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

module.exports = {
  addTwoNumbers,
  addNumbersInArray,
  isOdd,
}