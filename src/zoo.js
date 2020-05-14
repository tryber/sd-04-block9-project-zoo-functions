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
  const output = data.animals.filter(animal => ids.includes(animal.id));
  return output;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const output2 = data.animals.filter(element => element.name === animal);
  const output = output2[0].residents.every(x => x.age > age);
  return output;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const output = data.employees.find(
    element =>
      employeeName === element.firstName || employeeName === element.lastName);
  return output;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // return output = Object.assign({}, personalInfo,associatedWith);
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  // Pode fazer com MAP ??????????
  // Create array of id of all managers
  const allManagersIds = [];
  data.employees.forEach(element => allManagersIds.push(...element.managers));
  // chek if at leat on id (input) is inside the array of id of all managers
  const output = allManagersIds.some(allManagersId => allManagersId === id);
  return output;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  // Pode fazer dom default value?
  if (!managers) managers = [];
  if (!responsibleFor) responsibleFor = [];
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
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
