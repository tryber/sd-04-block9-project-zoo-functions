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

function animalsByIds(...theIds) {
  return data.animals.filter(animal => theIds.includes(animal.id));
}

// console.log(animalsByIds()); --> TESTE 1
// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce')); --> TESTE 2
// console.log(animalsByIds(
// '0938aa23-f153-4937-9f88-4858b24d6bce',
// 'e8481c1d-42ea-4610-8e11-1752cfc05a46')) --> TESTE 3

function animalsOlderThan(animal, age) {
  // seu código aqui
}


function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(elemento =>
    (elemento.firstName === employeeName || elemento.lastName === employeeName));
}

// console.log(employeeByName()); //--> TESTE 1
// console.log(employeeByName('Emery')); //--> TESTE 2
// console.log(employeeByName('Wishart')); //--> TESTE 3

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
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
