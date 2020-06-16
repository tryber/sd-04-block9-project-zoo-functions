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
  return data.animals.filter((animal) => {
    for (let i = 0; i < ids.length; i += 1) {
      if (animal.id === ids[i]) return true;
    }
    return false;
  });
}

function animalsOlderThan(animal, age) {
  return data.animals.find(a => a.name === animal)
  .residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(array =>
    array.firstName === employeeName || array.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const wrk = Object.assign({}, personalInfo, associatedWith);
  return wrk;
}

function isManager(id) {
  const adm = data.employees.some(array => array.managers.find(element => element === id));
  return adm;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((acc, animal) => {
      const { name } = animal;
      acc[name] = animal.residents.length;
      return acc;
    }, {});
  }
  return data.animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce((acc, value) =>
  (acc + (entrants[value] * data.prices[value])), 0);
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
