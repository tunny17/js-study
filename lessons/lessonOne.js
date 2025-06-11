// const animals = [
//   { name: 'Fluffykins', species: 'rabbit' },
//   { name: 'Caro', species: 'dog' },
//   { name: 'Hamilton', species: 'dog' },
//   { name: 'Harold', species: 'fish' },
//   { name: 'Ursla', species: 'cat' },
//   { name: 'Jimmy', species: 'fish' }
// ];

// const isDog = (animal) => {
//   return animal.species === 'dog';
// };

// const dogs = animals.filter(isDog);

// console.log(dogs);
// console.log(otherAnimals);

const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 16 }
];
const adults = people.reject((person) => person.age >= 18);
console.log(adults);
