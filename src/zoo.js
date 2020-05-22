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
  return data.animals.filter(({ id }) => ids.includes(id));
}
function animalsOlderThan(animal, age) {
  const animalSelected = data.animals.find(({ name }) => name === animal);
  return animalSelected.residents.filter(({ age: idade }) => idade >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(({ firstName, lastName }) => (
    firstName === employeeName ||
    lastName === employeeName),
  );
}

function createEmployee(personalInfo, associatedWith) {
  const employee = { ...personalInfo, ...associatedWith };
  return employee;
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    const animalsArray = data.animals.map(obj => ({ [obj.name]: obj.residents.length }));
    const animals = {};
    animalsArray.forEach(animal => Object.assign(animals, animal));
    return animals;
  }
  return data.animals.find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants = {}) {
  if (entrants.length === 0) return 0;
  return Object.keys(entrants).reduce(
    (acc, cur) => (acc += entrants[cur] * data.prices[cur]), 0);
}


function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const dayTime = {};
  Object.entries(data.hours).forEach((obj, index) => {
    const close = (obj[1].close) - 12;
    return ((index < 6) ? dayTime[obj[0]] === (`Open from ${obj[1].open}am until ${close}pm`) : dayTime[obj[0]] === ('CLOSED'));
  });
  if (!dayName) { return dayTime; }
  return { [dayName]: dayTime[dayName] };
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const perc = (100 + percentage) / 100;
  const prices = Object.keys(data.prices).reduce((acc, cur) => {
    acc[cur] = Math.round((data.prices[cur] * perc) * 100) / 100;
    return acc;
  }, {});
  data.prices = prices;
  return prices;
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
