/**
 * Objects
 * Stores "key:value" pairs.
 * Just like arrays, we can store any data type inside an Object
 * DON'T HAVE AN ORDER
 * ALWAYS ACCESS VALUES USING THE "KEY"
 */

const objectExample = {
  first_name: "Maui",
  today: "June 20th 2023",
  answerToTheUniverse: 42,
  isAlive: true,
  pets: ["Charlie", "Jensen", "Nina"],
  functionExample: function greet() {
    console.log('Hi there!')
  }
};

// console.log(objectExample);
// console.log(objectExample.pets[2]);
// objectExample.functionExample();

/**
 * --- Why???? ---
 * There is something called
 * OBJECT ORIENTED PROGRAMMING
 * and we can use ABSTRACTION
 * to define something from "real life"
 * into key:value pairs
 */

const employeeArray = [
  "Mexico",
  "Saavedra",
  "Maui",
  "Single",
  1000,
];

// console.log(employee[4]);

const employee = {
  nationality: 'Mexico',
  first_name: 'Maui',
  last_name: 'Saavedra',
  payment: 1000,
  '2020-06-20': { asteroid_name: 'xyz' },
  marital_status: 'Single',
}

console.log(employee.first_name);
console.log(employee['2020-06-20'])


/**
 * Real life scenario
 */

const employees = [
  { first_name: 'employee 1', marital_status: 'Married', is_senior: true },
  { first_name: 'employee 2', marital_status: 'Widow', is_senior: true },
  { first_name: 'employee 3', marital_status: 'Married', is_senior: false },
  { first_name: 'employee 4', marital_status: 'Single', is_senior: true },
  { first_name: 'employee 5', marital_status: 'Single', is_senior: false },
  { first_name: 'employee 6', marital_status: 'Married', is_senior: true },
]

for(let i=0; i<employees.length; i++) {
  console.log(
    employees[i].first_name,
    employees[i].marital_status,
  );
}