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

function animalsByIds(ids) {
  // seu código aqui
  const letsGo = data.animals.filter(animals => ids.find(id => id === animals.id));
  return letsGo;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.animals.find(list => list.name === animal);
  const animalsAge = animals.residents.every(list => list.age >= age);
  return animalsAge;
}

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const gerente = data.employees.some(list => list.managers.find(el => el === id));
  return gerente;
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
  Object.keys(data.prices).forEach((elem) => {
    (data.prices[elem] = Math.round(data.prices[elem] * ((percentage / 100) + 1) * 100) / 100);
  });
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
