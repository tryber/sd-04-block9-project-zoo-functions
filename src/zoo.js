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
animalMap()
function schedule(dayName) {
  if (!dayName) {
    const days = Object.values(data.hours).map((obj, index) => {
      if (index < 6) {
        return (`Open from ${obj.open}am until ${obj.close}pm`);
      } else {
        return ('CLOSED');
      };
    });
    return days;
  }

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
