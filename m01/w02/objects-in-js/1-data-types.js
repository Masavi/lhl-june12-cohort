/**
 * Primitive Types
 * Are not Objects
 * Are the lowest level of implementation; can't be broken down into smaller pieces
 */

// 1) String
console.log("Hello, world!")

// 2) Number
console.log(42);

// 3) Boolean
console.log(false);

// 4) BigInt
console.log(BigInt(9007199254740991));

// 5) Undefined
console.log(undefined);

// 6) Null
console.log(null);

// 7) Symbol
console.log( Symbol('cookie') );


const string = "this is a string";


/**
 * Object Types
 */

// 1) Array
/**
 * uses square brackes []
 * ordered
 * list of things (data types) separated by a coma
 */

const arrayExample = [
  "hello, world!",   // 0
  true,              // 1
  42,                // 2
  [],                 // 3
  function addTwoNumbers(number1, number2) {
    return number1 + number2;
  },
];

// console.log(arrayExample)
// console.log(arrayExample[2])

// 2) Function
// Function definition/declaration
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

// Function calling/execution
const result = addTwoNumbers(1, 3);
console.log(result);

console.log(typeof addTwoNumbers)

// 3) Object
