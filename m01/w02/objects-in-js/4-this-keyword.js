/**
 * If you want to access properties
 * FROM WITHIN THE SAME OBJECT
 * you can use the "this" keyword
 */

const person = {
  name: 'Bob',
  job: 'Builder',
  introduce: function introduce() {
    console.log(`My name is ${this.name} and i work as a ${this.job}`);
  }
}

person.introduce();
