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

function animalsByIds(...ids) { // rest
  return data.animals.filter((animal) => { // filter
    for (let i = 0; i < ids.length; i += 1) {
      if (animal.id === ids[i]) return true;  // testar ?:
    }
    return false;
  });
}

function animalsOlderThan(animal, age) {
  return data.animals.find(species => species.name === animal).residents // find
    .every(resident => resident.age >= age); // every
}

function employeeByName(employeeName = {}) { // default params
  if (Object.keys(employeeName).length === 0) return employeeName; // keys
  return data.employees.find(employee => employee.firstName === employeeName || // find
    employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign({}, personalInfo, associatedWith); // assign
}

function isManager(id) {
  let exists = false;
  data.employees.forEach(employee => // forEach
    employee.managers.find((manager) => { // find
      return manager === id ? exists = true : exists;}));
  return exists;
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
