/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const animalsByIds = (...ids) => ids.map(id => data.animals.find(animal => animal.id === id));

const animalsOlderThan = (animal, age) => data.animals.find(item => item.name === animal)
  .residents.every(item => item.age >= age);

const employeeByName = employeeName => data.employees
  .find(item => item.firstName === employeeName || item.lastName === employeeName) || {};

// function createEmployee(personalInfo, associatedWith) {

// }

const isManager = id => data.employees.some(item =>
  item.managers.some(value => value === id));

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

function animalCount(species) {
  if (species)
    return data.animals.find(item => item.name === species).residents.length;

  const animals = {};

  data.animals.map((item) => {
    animals[item.name] = item.residents.length;
    return animals;
  });

  return animals;
}

// function entryCalculator(entrants) {
//   // seu código aqui
// }

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

function oldestFromFirstSpecies(id) {
  const firstSpecie = data.employees.find(item => item.id === id).responsibleFor[0];
    
  const oldestAnimal = data.animals.find(item => item.id === firstSpecie)
    .residents.sort((a, b) => (a.age > b.age) ? -1 : 1)[0];
  
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  // entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  // increasePrices,
  //createEmployee,
};
