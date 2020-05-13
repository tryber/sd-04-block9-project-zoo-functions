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
  if (!ids) return [];
  const results = data.animals.filter(animal => ids.includes(animal.id));
  return results;
}
// passados o nome de uma espécie e uma idade, testa se todos os animais desta
// espécie possuem a idade mínima especificada
function animalsOlderThan(animal, age) {
  // seu código aqui
  const results = data.animals.find(animals => animals.name === animal).residents
  .every(residents => residents.age >= age);
  return results;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const results = data.employees
  .find(employees => employees.firstName === employeeName || employees.lastName === employeeName);
  return results;
}

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
  addEmployee,
  animalCount,
  animalMap,
  animalsByIds,
  animalsOlderThan,
  createEmployee,
  employeeByName,
  employeeCoverage,
  entryCalculator,
  increasePrices,
  isManager,
  oldestFromFirstSpecies,
  schedule,
};
