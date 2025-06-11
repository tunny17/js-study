// const me = 'John';

// function greatMe() {
//   console.log('hello ' + me);
// }

// greatMe();

// ------ notes

// closures
// - functions have access to variables in their outer scope
// - var creates a global variable while const and let create block-scoped variables
// - can create getter and setter functions with closure
// - when creating setter functions, the initial value that was declared gets updated no matter where it was declared in the codebase (it's called live binding) i.e when the value as be reset, it changes.

// const counter = (function () {
//   let privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }

//   function multiplyBy(val) {
//     privateCounter *= val;
//   }

//   function divideBy(val) {
//     privateCounter /= val;
//   }

//   return {
//     increment() {
//       changeBy(1);
//     },

//     decrement() {
//       changeBy(-1);
//     },

//     multiply() {
//       multiplyBy(2);
//     },

//     divide() {
//       divideBy(2);
//     },

//     value() {
//       return privateCounter;
//     }
//   };
// })();

// console.log(counter.value());
// counter.increment();
// counter.increment();
// counter.multiply();
// console.log(counter.value());
// counter.increment();
// counter.increment();
// counter.multiply();
// console.log(counter.value());
// counter.divide();
// console.log(counter.value());

// simple setter & getter function:
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
  return x;
};

console.log(setX(9));
