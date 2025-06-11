// const fs = require('fs');

// const output = fs
//   .readFileSync('data.txt', 'utf8')
//   .trim()
//   .split('\n')
//   .map((line) => line.split(' '))
//   .reduce((customers, line) => {
//     customers[line[0]] = customers[line[0]] || [];
//     customers[line[0]].push({
//       name: line[1],
//       price: line[2],
//       quantity: line[3]
//     });
//     return customers;
//   }, {});

// console.log(JSON.stringify(output, null, 2));
// note:
// trim() removes line breaks or spaces
// split('\n') splits the string into an array of lines based on the line breaks

// practice code:
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 }
];

const grouped = people.reduce((acc, person) => {
  acc[person.age] = acc[person.age] || [];
  acc[person.age].push(person.name);
  return acc;
}, {});

console.log(grouped);
