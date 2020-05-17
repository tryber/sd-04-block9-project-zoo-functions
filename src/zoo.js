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
  return ids.map(id => data.animals.find(animal => animal.id === id));
}

const animalsOlderThan = (animal, age) =>
  data.animals
    .find(a => a.name === animal)
    .residents.every(a => a.age > age);

const employeeByName = employeeName =>
  data.employees.find(
    ({ firstName, lastName }) => firstName === employeeName || lastName === employeeName) || {};

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(newEmployee);
}

function animalCount(species) {
  const allAnimals = data.animals.reduce((acumulador, atual) => {
    acumulador[atual.name] = atual.residents.length;
    return acumulador;
  }, {});
  if (!species) return allAnimals;
  return data.animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  return !entrants || Object.keys(entrants).length === 0
  ? 0
  : Object.keys(entrants).reduce((acc, curr) => acc + (entrants[curr] * data.prices[curr]), 0);
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
