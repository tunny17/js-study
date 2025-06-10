const animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursla', species: 'cat'},
  {name: 'Jimmy', species: 'fish'},
]

const isDog = (animal) => {
  return animal.species === 'dog';
}

const dogs = animals.filter(isDog);
const otherAnimals = animals.reject(isDog);

console.log(dogs);
// console.log(otherAnimals);