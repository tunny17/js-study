const animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursla', species: 'cat'},
  {name: 'Jimmy', species: 'fish'},
]

// const names = animals.map(function(animal) {
//   return animal.name + ' is a ' + animal.species;
// })

const names = animals.map((x) => x.name)

console.log(names);

// note: you can use map to build new arrays