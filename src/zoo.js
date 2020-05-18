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
  return data.animals.filter(({ id }) => ids.includes(id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalsAges = data.animals.find(({ name }) => name === animal)
  .residents.map(item => item.age);
  if (animalsAges.find(item => item < age)) return false;
  return true;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find(({ firstName, lastName }) =>
  firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  if (data.employees.find(item => item.managers.includes(id))) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  const animalsArray = data.animals.map(({ name, residents }) => ({ [name]: residents.length }));
  const animalsList = {};
  animalsArray.forEach(item => Object.assign(animalsList, item));
  return species === undefined ? animalsList : data.animals
  .find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  if (entrants.length === 0) return 0;
  return Object.keys(entrants).reduce((acc, cur) => acc + (entrants[cur] * data.prices[cur]), 0);
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
