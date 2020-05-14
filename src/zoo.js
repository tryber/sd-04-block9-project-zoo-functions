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

function animalsByIds(...ids) {
  // seu código aqui
  return data.animals.filter(({id}) => ids.includes(id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalsAges = data.animals.find(({name}) => name === animal)
  .residents.map((item) => item.age);
  return animalsAges.find((item) => item < age) ? false : true;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find(({firstName, lastName}) => firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {...personalInfo, ...associatedWith};
}

function isManager(id) {
  // seu código aqui
  // return data.employees[0].managers.filter(item => item === id);
  return data.employees.find(item => item.managers.includes(id)) ? true : false;
}

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'))

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
