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
  if (!ids) return [];
  return ids.map(elemento => data.animals.find(arr => (arr.id === elemento)));
}

function animalsOlderThan(animal, idade) {
  const filterFunction = data.animals.find(arr => arr.name === animal);
  return filterFunction.residents.every(arr => (arr.age > idade));
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(arr =>
    arr.firstName === employeeName || arr.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // abbreviation object literal
}

function isManager(id) {
  return data.employees.some(obj => obj.managers.some(arr => arr === id));
}

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
