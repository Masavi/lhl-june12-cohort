/**
 * Synchronous Code}
 * (Everything you have seen so far is SYNCHRONOUS)
 * For loops, If statements, variable declaration or assignment, console.logs, etc...
 */

// IT DOESN'T MATTER IF ASYNC CODE HAPPENS INSTANTLY,
// IT IS STILL GOING TO HAVE TO WAIT TILL SYNC CODE FINISHES
setTimeout(() => {
  console.log('0 Second elapsed...');
}, 0);

setTimeout(() => {
  // A)
  console.log('Two seconds have elapsed!⏱');
}, 2000)

// B)
console.log('Program starting...');


setTimeout(() => {
  // C)
  console.log('Two and a half seconds have elapsed!⏱');
}, 2500)

// D)
for (let i = 0; i < 10000; i++) {
  console.log(i);
}

/**
 * Asynchronous Code
 * There are specific functions that are ASYNC by nature
 */



