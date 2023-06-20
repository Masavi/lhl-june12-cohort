/**
 * Primitive types
 * are IMMUTABLE
 */

var numberOfApples = 10;

/**
 * Within functions, when we pass a
 * PRIMITIVE DATA TYPE as an argument,
 * the function is always going to work
 * with a COPY OF THE PRIMITIVE DATA TYPE
 */

// PASS BY VALUE
function eatApples(applesAvailable, applesToEat){
  return `
    I have ${applesAvailable} apples.
    I eat ${applesToEat} apples.
    Now I have ${applesAvailable-applesToEat} apples.
  `
}

// console.log(
//   eatApples(numberOfApples, 2)
// );

// console.log('Apples available:', numberOfApples);

/**
 * Object types
 * are MUTABLE
 */

const bob = {
  name: 'Robert',
  job: 'builder',
  quote: 'can we build it???',
}

const amanda = {
  name: 'Amanda',
  job: 'Programmer',
  quote: 'can we program it???',
}

console.log(bob);

// PASS BY REFERENCE
function changeName(person) {
  person.name = "New Name!";
}
changeName(bob);

console.log(bob);